# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Batch.destroy_all

greetings = ["Hello! :)", "Hey, what's up?", "Welcome!", "Nice to see you!", "Hey, guys!"]

i = 1

5.times do
  b = Batch.create(name: i, greeting: greetings.sample)
  i += 1
  5.times do
    Post.create(headline: Faker::HowIMetYourMother.catch_phrase, box1: Faker::HowIMetYourMother.quote, box2: Faker::HowIMetYourMother.quote, box3: Faker::HowIMetYourMother.quote, box4: Faker::HowIMetYourMother.quote, batch: b)
  end
end
