using FinalSplitWise.Data;
using FinalSplitWise.Models;
using FinalSplitWise.ResponseModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FinalSplitWise.Repositories
{
  public class GroupDataSQL : GroupData
  {
    private readonly SystemDBContext _Context;
    private readonly ILogger _Logger;

    public GroupDataSQL(SystemDBContext context, ILoggerFactory loggerFactory)
    {
      _Context = context;
      _Logger = loggerFactory.CreateLogger("GroupsRepository");
    }

    public GroupResponse ModelData(Group group)
    {
      GroupResponse response = new GroupResponse();
      response.groupid = group.groupid;

      var nameid = _Context.users.SingleOrDefault(c => c.userid == group.group_created_by);
      var detail = new Detail();
      detail.id = nameid.userid;
      detail.name = nameid.user_name;

      response.group_created_by = detail;

      response.group_name = group.group_name;

      response.is_simplified_depts = group.is_simplified_depts;

      var users = new List<Detail>();
      var data = _Context.groupMembers.Where(c => c.groupId == group.groupid).ToList();
      for (var i = 0; i < data.Count; i++)
      {
        var x = _Context.users.SingleOrDefault(c => c.userid == data[i].userId);
        var detail1 = new Detail();
        detail1.id = x.userid;
        detail1.name = x.user_name;
        users.Add(detail1);
      }
      response.memberLists = users;

      return response;
    }

    public async Task<GroupResponse> CreateGroupAsync(CreateGroupResponse group1)
    {
      GroupResponse response = new GroupResponse();
      Group group = new Group();
      group.group_name = group1.group_name;
      group.group_created_by = group1.group_created_by;
      group.is_simplified_depts = group1.is_simplified_depts;
      _Context.groups.Add(group);
      try
      {
        await _Context.SaveChangesAsync();
      }
      catch (Exception exp)
      {
        _Logger.LogError($"Error in {nameof(CreateGroupAsync)}: " + exp.Message);
      }

      foreach (var x in group1.groupMembers)
      {
        GroupMember groupMember = new GroupMember();
        groupMember.groupId = group.groupid;
        groupMember.userId = x.userId;
        _Context.groupMembers.Add(groupMember);
        try
        {
          await _Context.SaveChangesAsync();
        }
        catch (Exception exp)
        {
          _Logger.LogError($"Error in {nameof(CreateGroupAsync)}: " + exp.Message);
        }
      }
      response = ModelData(group);
      for(int i = 0; i < group1.groupMembers.Count; i++)
      {
        for (int j = i+1; j < group1.groupMembers.Count; j++)
        {
          Friend friend = new Friend();

          var frdexist = _Context.friends.SingleOrDefault(
          c => (c.userId == group1.groupMembers[i].userId && c.friendId == group1.groupMembers[j].userId)
          || (c.userId == group1.groupMembers[j].userId && c.friendId == group1.groupMembers[i].userId));
          if (frdexist == null)
          {
            friend.friendId = group1.groupMembers[j].userId;
            friend.userId = group1.groupMembers[i].userId;

            _Context.friends.Add(friend);
            try
            {
              await _Context.SaveChangesAsync();
            }
            catch (Exception exp)
            {
              _Logger.LogError($"Error in {nameof(CreateGroupAsync)}: " + exp.Message);
            }
          }
        }

      }
      return response;
    }

    public async Task<bool> DeleteGroupAsync(int id)
    {
      var data = _Context.settlements.Where(c => ( c.groupId == id)).ToList();
      if (data.Count != 0)
      {
        var isdelete = data.FindAll(c => c.amount == 0);
        if (isdelete.Count==0)
        {
          return (await _Context.SaveChangesAsync() > 0 ? true : false);
        }
        else
        {
          var bill = _Context.bills.Where(c => c.groupId == id).ToList();
          for (int i = 0; i < bill.Count; i++)
          {
            _Context.bills.Remove(bill[i]);
            //await _Context.SaveChangesAsync();
          }
          for (int i = 0; i < isdelete.Count; i++)
          {
            _Context.settlements.Remove(isdelete[i]);
            //await _Context.SaveChangesAsync();
          }
          var trans = _Context.transactions.Where(c => c.groupId == id).ToList();
          for(int i = 0; i < trans.Count; i++)
          {
            _Context.transactions.Remove(trans[i]);
            //await _Context.SaveChangesAsync();
          }
          var user = await _Context.groups
                     .SingleOrDefaultAsync(c => c.groupid == id);
          _Context.groups.Remove(user);
        }
      }
      else
      {
        var user = await _Context.groups
                      .SingleOrDefaultAsync(c => c.groupid == id);
        _Context.groups.Remove(user);
      }
      try
      {
        return (await _Context.SaveChangesAsync() > 0 ? true : false);
      }
      catch (Exception exp)
      {
        _Logger.LogError($"Error in {nameof(DeleteGroupAsync)}: " + exp.Message);
      }
      return false;
    }

    public async Task<GroupResponse> GetGroupAsync(int groupid)
    {
      GroupResponse GroupResponse = new GroupResponse();

      var group = await _Context.groups
         .SingleOrDefaultAsync(c => c.groupid == groupid);
      GroupResponse = ModelData(group);
      return GroupResponse;
    }

    public async Task<List<GroupResponse>> GetGroupsAsync(int userid)
    {
      var groups = new List<GroupResponse>();

      var group = await _Context.groups
         .Where(c => c.gm_group_id.Any(gs => gs.userId == userid)).ToListAsync();

      for (var j = 0; j < group.Count; j++)
      {
        var GroupResponse = new GroupResponse();
        GroupResponse = ModelData(group[j]);
        groups.Add(GroupResponse);
      }
      return groups;

    }

    public async Task<bool> UpdateGroupAsync(Group group)
    {
      _Context.groups.Attach(group);
      _Context.Entry(group).State = EntityState.Modified;
      try
      {
        return (await _Context.SaveChangesAsync() > 0 ? true : false);
      }
      catch (Exception exp)
      {
        _Logger.LogError($"Error in {nameof(UpdateGroupAsync)}: " + exp.Message);
      }
      return false;
    }

    public async Task<List<GroupResponse>> GetFriendGroupsAsync(int userid, int friendid)
    {
      var groups = new List<GroupResponse>();

      var group = await _Context.groups
         .Where(c => c.gm_group_id.Any(gs => (gs.userId == userid)) &&
         c.gm_group_id.Any(gs => (gs.userId == friendid))).ToListAsync();

      if (group.Count != 0)
      {
        for (var j = 0; j < group.Count; j++)
        {
          var GroupResponse = new GroupResponse();
          GroupResponse = ModelData(group[j]);
          groups.Add(GroupResponse);
        }
      }
      return groups;
    }
  }
}
