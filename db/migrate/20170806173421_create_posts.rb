class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :greeting
      t.string :headline
      t.string :giphy_url
      t.string :box1
      t.string :box2
      t.string :box3
      t.string :box3_url
      t.string :box4
      t.string :done
      t.references :batch, foreign_key: true

      t.timestamps
    end
  end
end
