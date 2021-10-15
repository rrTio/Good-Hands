import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Sidebar from "./Sidebar";

const Booking = () => {
    
    return (
      <div className={'bookingBody'}>
        <div className="grid-container">
          <div className="grid-item bg-purple-800 border-r-2 border-black">
            <Sidebar />
          </div>

          <div className="grid-item">
            <div className={"header-booking"}>
              <h1 className={"pageTitle"}>Book With Ease</h1>
            </div>
            <form className={"forms border-black"}>

              <div className={"container col-md-12 mt-3"}>
                <div className={"row"}>
                  <div className={"col-md-6 leftSide"}>
                    <div className={"row"}>
                      <label htmlFor={"fullName"} className={"w-64"}>
                        CUSTOMER NAME*
                      </label>
                      <input
                        type={"text"}
                        placeholder={"Customer Name"}
                        name={"fullName"}
                        id={"fullName"}
                      />
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"email"} className={"w-64"}>
                        EMAIL*
                      </label>
                      <input
                        type={"email"}
                        placeholder={"Email"}
                        name={"email"}
                        id={"email"}
                      />
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"contact"} className={"w-64"}>
                        CONTACT NO.*
                      </label>
                      <input
                        type={"number"}
                        placeholder={"Contact No."}
                        name={"contact"}
                        id={"contact"}
                      />
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"city"} className={"w-64"}>
                        CITY*
                      </label>
                      <select className={"city"}>
                        <option selected disabled>
                          CHOOSE YOUR CITY
                        </option>
                        <option value="QUEZON CITY">QUEZON CITY</option>
                        <option value="CALOOCAN CITY">CALOOCAN CITY</option>
                        <option value="MANILA">MANILA</option>
                        <option value="MARIKINA">MARIKINA</option>
                      </select>
                    </div>

                    <div className={"row"}>
                      <label
                        htmlFor={"address"}
                        className={"w-64 h-3 labelAddress"}
                      >
                        FULL ADDRESS*
                      </label>
                      <textarea
                        type={"text"}
                        placeholder={"Full Address"}
                        cols={"40"}
                        rows={"3"}
                        name={"address"}
                        id={"address"}
                      />
                    </div>
                  </div>

                  <div className={"col-md-6 rightSide"}>
                    <div className={"row"}>
                      <label htmlFor={"tracking"} className={"w-64"}>
                        TRACKING NO.
                      </label>
                      <input
                        type={"text"}
                        placeholder={"Tracking No."}
                        name={"tracking"}
                        id={"tracking"}
                      />
                    </div>

                    <div className={"row"}>
                      <center>
                        <label>ITEM DETAILS</label>
                      </center>
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"description"} className={"w-64"}>
                        ITEM DESCRIPTION
                      </label>
                      <input
                        type={"text"}
                        placeholder={"Item Name"}
                        name={"description"}
                        id={"description"}
                      />
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"city"} className={"w-64"}>
                        ITEM QUANTITY
                      </label>
                      <select className={"city"}>
                        <option selected disabled>
                          Quantity
                        </option>
                        <option value="1-10">1-10</option>
                        <option value="11-20">11-20</option>
                        <option value="21-30">21-30</option>
                        <option value="31-40">31-40</option>
                        <option value="41-50">41-50</option>
                        <option value="51-60">51-60</option>
                        <option value="61-70">61-70</option>
                        <option value="71-80">71-80</option>
                        <option value="81-90">81-90</option>
                        <option value="91-100">91-100</option>
                      </select>
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"city"} className={"w-64"}>
                        FRAGILE?
                      </label>
                      <select className={"city"}>
                        <option selected disabled>
                          Yes or No
                        </option>
                        <option value="yes">YES</option>
                        <option value="no">NO</option>
                      </select>
                    </div>

                    <div className={"row"}>
                      <center>
                        <button className={"btnAddItem button"}>
                          ADD MORE ITEM
                        </button>
                      </center>
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"city"} className={"w-64"}>
                        PARCEL SIZE*
                      </label>
                      <select className={"city"}>
                        <option selected disabled>
                          Size
                        </option>
                        <option value="small">SMALL</option>
                        <option value="medium">MEDIUM</option>
                        <option value="large">LARGE</option>
                      </select>
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"city"} className={"w-64"}>
                        PAYMENT TYPE*
                      </label>
                      <select className={"city"}>
                        <option selected disabled>
                          Payment type
                        </option>
                        <option value="cod">COD</option>
                        <option value="non">NON-COD</option>
                      </select>
                    </div>

                    <div className={"row"}>
                      <label
                        htmlFor={"description"}
                        className={"w-64"}
                        id={"lblParcel"}
                      >
                        PARCEL VALUE (w/o shipping fee)
                      </label>
                      <input
                        type={"text"}
                        placeholder={"Item Value"}
                        name={"description"}
                        id={"description"}
                      />
                    </div>

                    <div className={"row"}>
                      <label htmlFor={"description"} className={"w-64"}>
                        ADDITIONAL NOTES
                      </label>
                      <input
                        type={"text"}
                        placeholder={"Additional Notes"}
                        name={"description"}
                        id={"description"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <center>
                <button className={"btnBook button"}>BOOK NOW</button>
                <button className={"btnBulk button"}>BULK UPLOAD</button>
                <button className={"btnCancel button"}>CANCEL BOOKING</button>
                <button className={"btnClaims button"}>CLAIMS REQUEST</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Booking;
