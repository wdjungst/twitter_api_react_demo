json.tweets @tweets do |tweet|
  json.id tweet[:id]
  json.text tweet[:text]
  json.avatar tweet[:user][:profile_image_url]
  json.name tweet[:user][:screen_name]
end
