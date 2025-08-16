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
                  { label: "Designation:", value: "Senior Officer", alt: true },
                  { label: "Joining Date:", value: "10-05-2024" },
                  { label: "Department:", value: "Production", alt: true },
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
                  Calculation of Maternity Benefit :
                </th>
              </tr>

              {/* Number Inputs */}
              {[
                "Present Gross:",
                "Present Basic:",
                "Overtime Rate:",
              ].map((label, idx) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* end first section */}

      {/* page wages section previous month */}

      <section className="text-gray-600 body-font py-1">
        <div className="container px-5 mx-auto">
          <div className="flex items-center justify-between bg-sky-700 ">
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2  text-white shadow-sm">
              Paid Wages Information in Last Month
            </h3>
            <div>
              <button
                className="text-white"
                name="add__button"
                onClick={addRow}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-7 mt-[5px] pb-0 mr-[4px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="">
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th
                        colSpan={2}
                        rowSpan={2}
                        className="border border-gray-300 px-4 py-2 text-center text-xs font-bold text-gray-700"
                      >
                        Description
                      </th>
                      <th
                        colSpan={2}
                        rowSpan={2}
                        className="border border-gray-300 px-4 py-2 text-center text-xs font-bold text-gray-700"
                      >
                        Gross Wages
                      </th>
                      <th
                        colSpan={3}
                        className="border border-gray-300 px-4 py-2 text-center text-xs font-bold text-gray-700"
                      >
                        Allowance
                      </th>
                      <th
                        colSpan={4}
                        className="border border-gray-300 px-4 py-2 text-center text-xs font-bold text-gray-700"
                      >
                        Deduction
                      </th>
                      <th
                        rowSpan={2}
                        className="border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 text-center"
                      >
                        Total Amount
                      </th>
                      <th
                        rowSpan={2}
                        className="border border-gray-300 px-4 py-2 text-xs font-bold text-gray-700 text-center"
                      >
                        Action
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                        colSpan={1}
                      >
                        OT Amount
                      </th>
                      <th
                        className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                        colSpan={1}
                      >
                        Attendance Bonus
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                        Others Amount
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                        Absent
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                        Advance
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                        Others
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-xs font-bold">
                        Total Deduction
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td
                        colSpan={2}
                        className="border w-[300px] border-gray-300 px-2 py-2 text-xs text-gray-600"
                      >
                        {/* here will be input field */}
                        <h4>WAGES <span className="font-bold">[ DECEMBER ]</span> <span>2025</span></h4>
                      </td>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center"
                      >
                        <input
                          type="number"
                          id="wages"
                          disabled
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                        <input
                          type="ot_amount"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                        <input
                          type="attendance_bonus"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                        <input
                          type="others_amount"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                        <input
                          type="absent"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs  text-center">
                        <input
                          type="advance_amount"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                        <input
                          type="other_duction_amount"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                        <input
                          type="total_duction_amount"
                          id="name"
                          placeholder="0"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 font-bold text-center">
                        <input
                          type="total_payable_amount"
                          id="name"
                          placeholder="00.00"
                          min={"0"}
                          className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                        />
                      </td>
                      <td></td>
                    </tr>
                    {/* dynamic section */}
                    <AnimatePresence>
                      {rows.map((rowId) => (
                        <motion.tr
                          className="hover:bg-gray-50 "
                          key={rowId}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <td
                            colSpan={2}
                            className="border border-gray-300 px-2 py-2 text-xs text-gray-600"
                          >
                            {/* here will be input field */}
                            <input
                              type="text"
                              id="description"
                              placeholder="Enter Description.."
                              className="w-[200px] px-2 py-2 border  border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td
                            colSpan={2}
                            className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center"
                          >
                            <input
                              type="number"
                              id="wages"
                              disabled
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                            <input
                              type="ot_amount"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                            <input
                              type="attendance_bonus"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                            <input
                              type="others_amount"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                            <input
                              type="absent"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs  text-center">
                            <input
                              type="advance_amount"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                            <input
                              type="other_duction_amount"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 text-center">
                            <input
                              type="total_duction_amount"
                              id="name"
                              placeholder="0"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 font-bold text-center">
                            <input
                              type="total_payable_amount"
                              id="name"
                              placeholder="00.00"
                              min={"0"}
                              className="w-full px-2 py-2 border border-gray-300 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
               transition duration-200 ease-in-out"
                            />
                          </td>
                          <td className="border border-gray-300 px-2 py-2 text-xs text-gray-600 font-bold text-center">
                            <button
                              name="delete__button"
                              onClick={() => removeRow(rowId)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 text-rose-600"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                    {/* end dynamic */}
                  </tbody>
                  <tfoot className="bg-gray-100">
                    <tr className="hover:bg-gray-50">
                      <th
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold text-left"
                      >
                        Grand Total
                      </th>
                      <td
                        colSpan={2}
                        className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold "
                      >
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold ">
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold ">
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold ">
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold ">
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs  font-bold ">
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold ">
                        0
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold ">
                        0
                      </td>
                      <td
                        className="border border-gray-300 px-4 py-2 text-xs text-gray-600 font-bold text-left"
                        colSpan={2}
                      >
                        26560
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 py-2">
        <div className="overflow-x-auto">
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
                    value="915.38"
                  />{" "}
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 text-xs">
                    (Total Paid Amount in Last Month ÷ 26)
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
                    value="109846"
                  />{" "}
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 text-xs">
                    (1 Day Benefit Amount × 120 Days)
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
                    value="54841"
                  />{" "}
                </td>
                <td className="px-3 py-2">
                  <span className="text-gray-500 text-xs">
                    (In Each Installment)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* end  */}
      {/*section previous month */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex items-center justify-between bg-sky-700 ">
            <h3 className="font-extrabold uppercase text-[13px] py-2 px-2  text-white shadow-sm">
              PREVIOUS MONTH SALARY & CURRENT MONTH.
            </h3>
            <div></div>
          </div>
          <div className="">
            <div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between border-b items-center text-[13px]  px-2 py-2 bg-gray-100 text-left font-bold hover:bg-gray-200 transition-colors"
              >
                <span>Salary Previous Month Status [ Optional ] </span>
                <span
                  className={`transform transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className=" bg-white border-t">
                    {/* top table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th
                              colSpan={6}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Salary
                            </th>
                            <th
                              colSpan={7}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Attendance
                            </th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Basic
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              HRA
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Med. Allow
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Food Allow.
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Transport
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Gross
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Present
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              CL
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              SL
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              EL
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              WH
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              AB Days
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Pay Days
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-2 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  name="basic"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-2 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-2 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* bottom table  */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th
                              colSpan={3}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Allowance
                            </th>
                            <th
                              colSpan={3}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Overtime
                            </th>
                            <th
                              rowSpan={2}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Payable
                              <br />
                              Total Amount
                            </th>
                            <th
                              colSpan={3}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Deduction
                            </th>
                            <th
                              rowSpan={2}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Net Disbursable
                            </th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Attn. Bonus
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Others Allow.
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Total Allowance
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              OT HR
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              OT Rate
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              OT Amount
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              AB. Amount
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Advance
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Total Deduction
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="00.00"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="00.00"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* end  */}

      {/* current month section */}

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="">
            <div>
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="w-full flex justify-between items-center text-[13px]  px-2 py-2 bg-gray-100 text-left font-bold hover:bg-gray-200 transition-colors"
              >
                <span>Salary Current Month Status </span>
                <span
                  className={`transform transition-transform ${
                    isOpen2 ? "rotate-90" : ""
                  }`}
                >
                  ▶
                </span>
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpen2 && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className=" bg-white border-t">
                    {/* top table */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th
                              colSpan={6}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Salary
                            </th>
                            <th
                              colSpan={7}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Attendance
                            </th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Basic
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              HRA
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Med. Allow
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Food Allow.
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Transport
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Gross
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Present
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              CL
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              SL
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              EL
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              WH
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              AB Days
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Pay Days
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-2 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  name="basic"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-2 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-2 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* bottom table  */}
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th
                              colSpan={3}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Allowance
                            </th>
                            <th
                              colSpan={3}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Overtime
                            </th>
                            <th
                              rowSpan={2}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Payable
                              <br />
                              Total Amount
                            </th>
                            <th
                              colSpan={3}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Deduction
                            </th>
                            <th
                              rowSpan={2}
                              className="border border-gray-300 px-4 py-2 text-xs text-gray-600"
                            >
                              Net Disbursable
                            </th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Attn. Bonus
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Others Allow.
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Total Allowance
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              OT HR
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              OT Rate
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              OT Amount
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              AB. Amount
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Advance
                            </th>
                            <th className="border border-gray-300 px-4 py-2 text-xs text-gray-600">
                              Total Deduction
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="00.00"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  font-bold px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="0"
                                />
                              </div>
                            </td>
                            <td className="border border-gray-300 px-1 py-1 font-bold text-center">
                              <div className="relative">
                                <input
                                  type="number"
                                  className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                                  placeholder="00.00"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      {/* end */}

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
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-300 px-2 py-1 font-medium">
                        <label htmlFor="wagesAmount">
                          Payable Wages Amount for the Month of May & June-2025:
                        </label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="number"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          placeholder="0"
                        />
                      </td>
                    </tr>

                    <tr className="font-semibold bg-gray-50">
                      <td className="border border-gray-300 px-2 py-1">
                        <label htmlFor="totalPayable">
                          Total Payable Amount:
                        </label>
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-right">
                        <input
                          type="number"
                          className="w-full  px-1 text-[12px] py-[6px] shadow-xs text-gray-900 bg-transparent border border-gray-300  placeholder-gray-400  focus:outline-none leading-relaxed"
                          placeholder="0"
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
                          defaultValue="54923"
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
                          defaultValue="50"
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
                          defaultValue="54873"
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
        </div>
      </section>
      {/* end */}

      {/* footer  */}

      <section className="text-gray-600 body-font mt-8">
        <div className="container px-5 mx-auto">
          <footer className="bg-gray-100 border-t py-2 text-center text-xs text-gray-600">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;
