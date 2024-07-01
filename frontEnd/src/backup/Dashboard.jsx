import React from "react";
import { useState } from "react";
import logo from "./assets/react.svg";
const App = () => {
  const [display, setDisplay] = useState(false);
  const displayDashboard = () => {
    setDisplay(true);
  };
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-between">
          <div className="ml-12">
            <button>GULE</button>
          </div>
          <div className="flex  space-x-10 p-4 pr-14 h-[10vh] text-black">
            <div className="hover:bg-slate-100  p-2 ">
              {" "}
              <button>Login</button>{" "}
            </div>
            <div className="hover:bg-slate-100  p-2">
              <button>SignUp</button>{" "}
            </div>
            <div className="hover:bg-slate-100  p-2">
              <button>Notification</button>
            </div>
            <div className="hover:bg-slate-100  p-2">
              <button>Help</button>
            </div>
          </div>
        </div>
        <div className="flex border-solid h-[90vh]">
          <div className="  w-1/5 text-white h-[100%]">
            <div className="h-[100%] overflow-y-auto">
              <div className="h-4 w-60 m-2">
                <button></button>{" "}
              </div>
              <div
                onClick={displayDashboard}
                className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg"
              >
                {" "}
                <button>Dashboard</button>{" "}
                
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Categories</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Users</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Contacts</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Help</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Categories</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Users</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Contacts</button>{" "}
              </div>
              <div className="h-12 w-60 bg-slate-50 bg-opacity-55 m-2 text-black flex items-center justify-center hover:bg-slate-100 hover:text-lg">
                {" "}
                <button>Help</button>{" "}
              </div>
          
            </div>
          </div>
          <div className=" h-[100%] w-4/5">
            <div className="bg-slate-100 h-[95%] m-4">
              {display ? (
                <p>dashbord</p>
              ) : (
                <div className=" h-[100%] flex justify-center items-center">
                  <img src={logo} alt="logo" className="w-24  h-24" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default App;
