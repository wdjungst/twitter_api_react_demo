class TweetsController < ApplicationController
  def index
    @tweets = client.user_timeline(user).take(20)
    render 'tweets'
  end

  def create
    @tweet = client.update(params[:tweet])
    render 'tweet'
  end

  def followers
    @followers = client.followers(user).attrs[:users]
  end

  def search
    @tweets = client.search(params[:term]).take(10)
    render 'tweets'
  end
end
