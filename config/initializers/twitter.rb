twitter = "#{Rails.root}/config/twitter.yml"
if File.exists? twitter
  config = YAML.load_file(twitter)
  config.each { |key, value| ENV[key] || ENV[key] = value.to_s }
end
