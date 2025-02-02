"use client";

import { useState } from "react";
import { JSONObject } from "../schemas/types";
import useAppHook from "../features/hooks";
import PrimaryButton from "./basics/PrimaryButton.component";
import SecondaryButton from "./basics/SecondaryButton.component";

function ActivityForm({clientData, activityData = {} as JSONObject, handleOnClose}) {

    const getInitData = () => {
        return ( activityData == null ) ? {} : activityData;
    }

    const {saveActivity} = useAppHook();
   
    const [data, setData] = useState(getInitData);

    const setValue = (propName: string, value: string) => {
        var tempData = JSON.parse(JSON.stringify(data));
        tempData[propName] = value;
        setData( tempData );
    }

    const handleOnSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        saveActivity(clientData, data);
        handleOnClose();
    }
    
    const handleOnCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        handleOnClose();
    }

    const getTitle = () => {
        return ( activityData.id != undefined ) ? "Edit Activity" : "Add Activity";
    }

    return (
        <div className="w-full mx-auto mt-5 p-4 border border-gray-300 rounded-md shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">{getTitle()}</h2>
          <div className="mb-8">
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program</label>
             <input 
                onChange={(e) => setValue("program", e.target.value)}
                value={data["program"]}
                id="program"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 "
            />
          </div>

          <div className="mb-8">
            <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note</label>
            <input 
                onChange={(e) => setValue("note", e.target.value)}
                value={data["note"]}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 "
                type="text"
                id="note"
            />
          </div>

            <div className="flex items-center justify-between">
              
                <PrimaryButton 
                    onClick={(e) => handleOnSaveClick(e)} 
                    clazz="w-2/3 mr-10"
                    label="Save"
                />

                <SecondaryButton
                    clazz="w-2/3"
                    onClick={(e) => handleOnCloseClick(e)} 
                    label=" Go back to the list"/>
            </div>
      </div>
    )
}

export default ActivityForm;