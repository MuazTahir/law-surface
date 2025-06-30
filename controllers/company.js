import CaseValue from "@/models/SystemValue"
import { systemValues } from "@/utilities/data-generation";

export let companyController = {
    dispose:async(companyId)=>{

        // Dispose off all resources
        await CaseValue.deleteMany({company:companyId});

    },
    setup:async (companyInstance)=>{

        // create system values now

        let items = [
            "Governorate",
            "Task Type",
            "Task Priority",
            "Court Departments",
            "Adjectives",
            "Procedures Type",
            "Procedures Status",
            "POA Type",
            "Payment Type",
            "Legal Status",
            "Judges List",
            "Execution Procedures types",
            "Execution Procedures Status",
            "Court",
            "Counselling Type",
            "Counselling Method",
            "Contract Type",
            "Contact Type",
            "Execution Case Type",
            "Case Type",
            "Case Stage",
            "Fees Item"
          ]

          
          await Promise.all(items.map(async(item, index)=>{

            // let index = (index+1) * 100;
              
              let caseValueItem = new CaseValue();
              caseValueItem.groupTitle = item;
              caseValueItem.values = systemValues.generate(item);

              caseValueItem.company = companyInstance._id;
              await caseValueItem.save();


          }))


    }

}