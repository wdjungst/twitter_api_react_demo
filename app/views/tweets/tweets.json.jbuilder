json.tweets @tweets do |tweet|
  json.id   tweet.id
  json.text tweet.text
  json.name tweet.user.screen_name
  json.avatar tweet.user.profile_image_url.to_s
end
