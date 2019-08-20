class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.integer :employee_id
      t.string :email_address
      t.string :phone_number

      t.timestamps
    end
  end
end
