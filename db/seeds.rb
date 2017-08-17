# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
greetings = ["Hello! :)", "Hey, what's up?", "Welcome!", "Nice to see you!", "Hey, guys!"]
i = 1

5.times do
  batch = Batch.create(name: i, greeting: greetings.sample)
  i += 1
  5.times do
    Post.create(headline: Faker::HowIMetYourMother.quote, box1: Faker::Lorem.paragraph, box2: Faker::Lorem.paragraph, box3: Faker::Lorem.paragraph, box4: Faker::Lorem.paragraph, batch: batch)
  end
end
