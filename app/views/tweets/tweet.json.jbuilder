json.tweet do
  json.id @tweet.id
  json.text @tweet.text
  json.author @tweet.user.name
end
