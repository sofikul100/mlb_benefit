import logof from "./logof.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [rows, setRows] = useState<number[]>([]);
  // dynamic rows
  console.log(rows);
  const addRow = () => {
    setRows((prev: any) => [...prev, Date.now()]); // unique id
  };

  const removeRow = (id: number) => {
    setRows((prev: any) => prev.filter((rowId: number) => rowId !== id));
  };

  //============ACCORDION LOGIC==========
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  // date picker

  return (
    <div className="container mx-auto shadow-md bg-white rounded-sm">
      <section className="flex items-center justify-between">
        <div className="flex flex-col  py-4 w-full  ml-[19px]">
          <h1 className="text-[22px] font-bold  text-center md:text-left">
            DEBONAIR LIMITED | ORBITEX KNITWEAR LIMITED
          </h1>
          <p className="text-center md:text-left">
            Gorat, Zirabo, Ashulia-Dhaka-1341
          </p>
          <p className="text-[14px] text-center md:text-left font-bold">
            {" "}
            Maternity Benefit Payment Sheet
          </p>
        </div>
        <div className="  mr-[14px] hidden md:block">
          <img src={logof} alt="" className="w-[140px] " />
        </div>
      </section>

      {/*  first section done */}
      <section className="text-gray-600 body-font py-1">
        <div className="container px-5 mx-auto">
          {/* Title & Filters */}
          <div>
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2 bg-sky-700 text-white shadow-sm">
              Employee Information and Related Dates.
            </h3>
            <div className="flex w-full items-center py-2 gap-4 bg-white border px-1">
              <div className="w-full ">
                <select
                  id="resign_type"
                  className="border py-[7px] font-bold border-gray-300 text-gray-600 text-base w-full focus:outline-none"
                >
                  <option value="Resign" selected>
                    SELECT YOUR COMPANY
                  </option>
                  <option value="DL" selected>
                    DEBONAIR LIMITED
                  </option>
                  <option value="OKL">ORBITEX KNITWEAR LIMITED</option>
                  <option value="FKL">FRIENDS KNITING LIMITED</option>
                  <option value="DL-2">DEBONAIR LIMITED UNIT-2</option>
                </select>
              </div>
              <div className="w-full">
                <input
                  type="number"
                  className="w-full font-bold text-[12px] px-2 py-[7px] border border-gray-300 focus:outline-none"
                  placeholder="Enter employee id..."
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <div className="bg-white overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left text-gray-800 border border-gray-300">
                    <tbody>
                      {[
                        { label: "Name:", value: "Md. Sultana Begum" },
                        {
                          label: "Designation:",
                          value: "Senior Officer",
                          alt: true,
                        },
                        { label: "Joining Date:", value: "10-05-2024" },
                        {
                          label: "Department:",
                          value: "Production",
                          alt: true,
                        },
                        { label: "Section:", value: "Swing" },
                        { label: "Sub-Section:", value: "BR-4", alt: true },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className={`${row.alt ? "bg-gray-50" : ""} border-b`}
                        >
                          <th className="font-bold text-[12px] py-2 px-2">
                            {row.label}
                          </th>
                          <td className="py-2 px-2">
                            <input
                              type="text"
                              disabled
                              value={row.value}
                              className="w-full text-[12px] px-2 py-[7px] border border-gray-300 bg-gray-100"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden">
                <table className="min-w-full text-sm text-left text-gray-800 border border-gray-300">
                  <tbody>
                    {/* Date Inputs */}
                    <tr className="border-b border-gray-300">
                      <th className="font-bold px-[4px] text-[12px] w-[200px]">
                        First Notification Date:
                      </th>
                      <td className="px-[4px] py-[4px]">
                        <input
                          type="date"
                          className="w-full px-1 uppercase font-bold text-[11px] py-[6px] border border-gray-300 focus:outline-none"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold px-[4px] text-[12px]">
                        Leave Duration:
                      </th>
                      <td className="px-[4px] py-[4px] flex gap-2">
                        <input
                          type="date"
                          className="w-full px-1 uppercase font-bold text-[11px] py-[6px] border border-gray-300 focus:outline-none"
                        />
                        <span>-</span>
                        <input
                          type="date"
                          className="w-full px-1 uppercase font-bold text-[11px] py-[6px] border border-gray-300 focus:outline-none"
                        />
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <th className="font-bold text-[12px] px-[4px]">
                        Expected Delivery Date:
                      </th>
                      <td className="px-[4px] py-[4px]">
                        <input
                          type="date"
                          className="w-full px-1 uppercase font-bold text-[11px] py-[6px] border border-gray-300 focus:outline-none"
                        />
                      </td>
                    </tr>

                    {/* Section Header */}
                    <tr className="border-b border-gray-300">
                      <th
                        colSpan={2}
                        className="font-bold text-[12px] text-center  px-[4px] bg-gray-600 text-white py-[13.5px]"
                      >
                        Employee Updated Salary Wages.
                      </th>
                    </tr>

                    {/* Number Inputs */}
                    {["Present Gross:", "Present Basic:", "Overtime Rate:"].map(
                      (label, idx) => (
                        <tr key={idx} className="border-b border-gray-300">
                          <th className="font-bold text-[12px] py-[4px] px-[4px]">
                            {label}
                          </th>
                          <td className="py-[4px] px-[4px]">
                            <input
                              type="number"
                              className="w-full font-bold px-2 text-[12px] py-[7px] border border-gray-300 focus:outline-none"
                              placeholder="00.00"
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end first section */}

      {/* page wages section previous month */}

      <section className="container mx-auto px-5 py-2">
        <div className="overflow-x-auto">
          <div className="flex items-center justify-between bg-sky-700 ">
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2  text-white shadow-sm">
              Maternity Benefit Calculation Summary.
            </h3>
            <div></div>
          </div>
          <table className="min-w-full border border-gray-300 text-sm">
            <tbody>
              <tr className="border-b border-gray-300 ">
                <td className="px-3 py-2 font-semibold border-r text-[11px] uppercase">
                  Average Salary Per Day
                </td>
                <td className="px-1 py-1  border-r text-center font-bold text-[13px]">
                  <input
                    disabled
                    readOnly
                    type="number"
                    className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                    placeholder="0"
                    value="510"
                  />{" "}
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 text-xs font-bold">
                    [ Last Updated Gross ÷ 26 ]
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-3 py-2 font-semibold border-r text-[11px] uppercase">
                  Total Benefit Amount
                </td>
                <td className="px-1 py-1 text-center border-r text-[13px] font-bold">
                  <input
                    type="number"
                    disabled
                    readOnly
                    className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                    placeholder="0"
                    value="61200"
                  />{" "}
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 text-xs font-bold">
                    [ 1 Day Benefit Amount × 120 Days ]
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-semibold border-r text-[11px] uppercase">
                  Payable Amount
                </td>
                <td className="px-1 py-1 text-center border-r font-bold text-[13px]">
                  <input
                    type="number"
                    disabled
                    readOnly
                    className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                    placeholder="0"
                    value="30600"
                  />{" "}
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 text-xs font-bold">
                    [ In Each Installment ]
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* end  */}

      {/* final section */}
      <section className="text-gray-600 body-font mt-2">
        <div className="container px-5 mx-auto">
          <div className="flex items-center justify-between bg-sky-700 ">
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2  text-white shadow-sm">
              PAYMENT PROCESS STATUS.
            </h3>
            <div></div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {/* <!-- First Installment --> */}
            <div className="bg-white shadow-sm">
              <h2 className="text-[15px] font-extrabold bg-gray-200 pt-3 pb-2 border-b  uppercase text-center">
                Payment of First Installment
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-xs">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        1st Notice Date:
                      </td>
                      <td className="border border-gray-300 px-2 py-1 x">
                        <input
                          type="date"
                          className="w-full   px-1 uppercase font-bold text-[11px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        <label htmlFor="payableAmount">Payable Amount:</label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="number"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          placeholder="0"
                          value={"30600"}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1">
                        <label htmlFor="stampDeduction">Stamp Deduction:</label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="number"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          placeholder="0"
                        />
                      </td>
                    </tr>

                    <tr className="font-bold bg-gray-100">
                      <td className="border border-gray-300 px-2 py-1">
                        <label htmlFor="netPayable">Net Payable Amount:</label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="number"
                          value={"30600"}
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          placeholder="0"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        Date of Payment:
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="date"
                          className="w-full   px-1 uppercase font-bold text-[11px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Second Installment --> */}
            <div className="bg-white shadow-sm border">
              <h2 className="text-[15px] font-extrabold bg-gray-200 pt-3 pb-2 border-b uppercase text-center">
                Payment of Second Installment
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-xs">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        2nd Notice Date:
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="date"
                          className="w-full   px-1 uppercase font-bold text-[11px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        <label htmlFor="secondPayableAmount">
                          Payable Amount:
                        </label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          id="secondPayableAmount"
                          type="number"
                          defaultValue="30600"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        <label htmlFor="secondStampDeduction">
                          Stamp Deduction:
                        </label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          id="secondStampDeduction"
                          type="number"
                          placeholder="0"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                        />
                      </td>
                    </tr>

                    <tr className="font-bold bg-gray-50">
                      <td className="border border-gray-300 px-2 py-1">
                        <label htmlFor="secondNetPayable">
                          Net Payable Amount:
                        </label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          id="secondNetPayable"
                          type="number"
                          defaultValue="30600"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          readOnly
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        Date of Payment:
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="date"
                          className="w-full   px-1 uppercase font-bold text-[11px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-end gap-4 justify-end">
            <button
              className="px-8 py-2 bg-green-600 text-white  flex items-end font-medium 
         hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-offset-2
         transition duration-200"
            >
              View Data
            </button>
            <button
              className="px-[42.5px] py-2 bg-blue-600 text-white flex items-end font-medium 
         hover:bg-blue-700 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:ring-offset-2
         transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      {/* end */}

      {/* footer  */}

      <section className="text-gray-600 body-font mt-8">
        <div className="container px-5 mx-auto">
          <footer className="bg-gray-100 border-t py-2 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} @@@@@. All rights reserved.
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;
