class AddGreetingToBatches < ActiveRecord::Migration[5.1]
  def change
    add_column :batches, :greeting, :string
  end
end
