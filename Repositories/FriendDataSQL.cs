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
    public class FriendDataSQL:FriendData
    {
        private readonly SystemDBContext _Context;
        private readonly ILogger _Logger;

        public FriendDataSQL(SystemDBContext context, ILoggerFactory loggerFactory)
        {
            _Context = context;
            _Logger = loggerFactory.CreateLogger("FriendsRepository");
        }

    public async Task<Friend> AddFriendAsync(int userid, int friendid)
    {
      Friend friend = new Friend();

        var frdexist = _Context.friends.SingleOrDefault(
        c => (c.userId == userid && c.friendId == friendid)
        || (c.userId == friendid && c.friendId == userid));
      if (frdexist == null)
      {
        friend.friendId = friendid;
        friend.userId = userid;

        _Context.friends.Add(friend);
        try
        {
          await _Context.SaveChangesAsync();
        }
        catch (Exception exp)
        {
          _Logger.LogError($"Error in {nameof(AddFriendAsync)}: " + exp.Message);
        }
      }
      return friend;
    }

    public async Task<Friend> AddNewFriendAsync(string name, string email, int userid)
        {
            Friend friend = new Friend();

            var user = await _Context.users.SingleOrDefaultAsync(
                c=>c.email_id==email && c.user_name==name);
            if(user!=null)
            {
                var frdexist = _Context.friends.SingleOrDefault(
                c => (c.userId == userid && c.friendId == user.userid)
                ||(c.userId == user.userid && c.friendId == userid));
                if(frdexist==null)
                {
                    friend.friendId = user.userid;
                    friend.userId = userid;

                    _Context.friends.Add(friend);
                    try
                    {
                        await _Context.SaveChangesAsync();
                    }
                    catch (Exception exp)
                    {
                        _Logger.LogError($"Error in {nameof(AddNewFriendAsync)}: " + exp.Message);
                    }
                }   
            }
            return friend;
        }

    public async Task<FriendResponse> GetFriendAsync(int friend_id)
    {
      FriendResponse friend = new FriendResponse();
      var data = await _Context.users.SingleOrDefaultAsync(c => c.userid == friend_id);
      friend.userid = data.userid;
      friend.user_name = data.user_name;
      friend.phone_no = data.phone_no;
      friend.email_id = data.email_id;
      return friend;
    }

    public async Task<List<FriendResponse>> GetFriendsAsync(int user_id)
        {
            var frdlist = new List<FriendResponse>();
            var list =await _Context.friends.Where(c => c.userId == user_id || c.friendId == user_id).ToListAsync();
            for(int i=0;i<list.Count;i++)
            {
                FriendResponse friend = new FriendResponse();

                if (list[i].friendId==user_id)
                {
                    friend.userid = list[i].userId;
                }
                else
                {
                    friend.userid = list[i].friendId;
                }
                var data = _Context.users.SingleOrDefault(c => c.userid == friend.userid);
                friend.user_name = data.user_name;
                friend.email_id = data.email_id;
                friend.phone_no = data.phone_no;
                frdlist.Add(friend);
            }
            return frdlist;
        }

        public async Task<bool> RemoveFriendAsync(int userid, int friendid )
        {

      var data = _Context.settlements.Where(c => (c.payerId == userid && c.payeeId == friendid )||(c.payerId==friendid && c.payeeId==userid)).ToList();
     

      if (data.Count != 0)
      {
        var isdelete = data.Find(c => c.amount == 0);
        if (isdelete != null)
        {
          var frd = await _Context.friends.SingleOrDefaultAsync(
               c => (c.userId == userid && c.friendId == friendid)
               || (c.userId == friendid && c.friendId == userid));
          _Context.friends.Remove(frd);
          _Context.settlements.Remove(isdelete);
        }
      }
     
      else
      {
        var frd = await _Context.friends.SingleOrDefaultAsync(
               c => (c.userId == userid && c.friendId == friendid)
               || (c.userId == friendid && c.friendId == userid));
        _Context.friends.Remove(frd);
      }

     
            try
            {
                return (await _Context.SaveChangesAsync() > 0 ? true : false);
            }
            catch (Exception exp)
            {
                _Logger.LogError($"Error in {nameof(RemoveFriendAsync)}: " + exp.Message);
            }
            return false;
        }
    }
}
