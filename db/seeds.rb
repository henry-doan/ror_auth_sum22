Cat.all.delete_all 
User.all.delete_all 

@i = 1 

5.times do
  @user = User.create(
    email: "test#{@i}@test.com",
    password: "password",
    first: "test#{@i}",
    last: "testing#{@i}",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
  )
  @i += 1

  10.times do
    Cat.create(
      name: Faker::Creature::Cat.name,
      breed: Faker::Creature::Cat.breed,
      registry: Faker::Creature::Cat.registry,
      avatar: Faker::Avatar.image(slug: 'cat', size: '100x400', format: 'png', set: 'set4'), 
      user_id: @user.id
    )
  end

end

puts 'Done Seeding'