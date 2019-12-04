class SignupWorkFlowRenderer {
  // handles email/leaderboard signups
  constructor(){
    document.getElementById("signup_submit").addEventListener("click", function(){
      document.getElementById("signup_form").style.visibility = "hidden";
      document.getElementById("bot_or_not_view").style.visibility = "visible";
    });
  }
}

class BotOrNot {
  private session_email: string;
  //Handles the call and resposne, sends things to Twitter Renderer to render tweet data
  constructor(session_email: string){
    // Creates the bot or not buttons called after Signup workflow render finishs
    this.session_email = session_email;

  }
  // Based on API call from backend
  // We can mock
  render_tweet(json_res: string){
    let tweet_data = JSON.parse(json_res);
    // Construct Tweet box
  }

  render_buttons(){
    let bot_or_not = this;
    document.getElementById("bot_button").addEventListener("click", function(){
      let tweet_id = document.getElementById("tweet_id").innerText;
      bot_or_not.send_bot_or_not(true, tweet_id);
    });

    document.getElementById("not_bot_button").addEventListener("click", function(){
      let tweet_id = document.getElementById("tweet_id").innerText;
      //TODO: Deal with type error
      bot_or_not.send_bot_or_not(false, tweet_id);
    });
  }

  send_bot_or_not(bot_or_not: boolean, tweet_id: string) {
    // Construct JSON, and send to backend
    console.log(bot_or_not + tweet_id);
  }
}
class ViewFlowManager {

}

let a = new BotOrNot("heyo");
