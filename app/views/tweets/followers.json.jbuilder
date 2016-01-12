json.followers @followers do |follower|
  json.id follower[:id]
  json.name follower[:screen_name]
  json.description follower[:description]
  json.avatar follower[:profile_image_url]
end
