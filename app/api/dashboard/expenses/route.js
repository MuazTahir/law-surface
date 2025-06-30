import { Category } from "@/models/expenseCategory";
import { Expense } from "@/models/expense";
import { NextResponse } from "next/server";
import { getDataType } from "@/app/lib/utils";


export async function POST(req) {



  try {

    let data = await getDataType(req);

    // let data = await req.json();
    // console.log(data);


    switch (true) {

      case data.type == "getExpenseCategories":


      console.log(data.type + " per agya h ");

        let categories = await Category.find().populate({ path: "expenses", select: "amount note date vatPercentage expenseCategory" }).exec();
        
        return NextResponse.json({
          success: true,
          categories
        })

        break;

      case data.type == "addExpenseCategory":

      console.log(data.type + " per agya h ");


        let newCategory = new Category(data.data)
        await newCategory.save()
        return NextResponse.json({
          success: true,
          data,
          newCategory,
          message: "Expense category created successfully"
        });

      case data.type == "addExpense":

      console.log(data.type + " per agya h ");


        let newExpense = new Expense(data.data);
        await newExpense.save();
        console.log(newExpense.expenseCategory)

        //  const category = await Category.findById(req.body.expenseCategory);
        const category = await Category.findById(newExpense.expenseCategory);

        console.log(category);


        category.expenses.push(newExpense);
        await category.save();


        return NextResponse.json({
          success: true,
          message: "data save successfull",
          newExpense
        })



    }



  } catch (err) {
    console.log(err + "error occer");
    return NextResponse.json({
      success: false,
      message: "data not save "

    })
  }



}



