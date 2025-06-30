'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

import MyTab from "../settings/files/myTab/mytab";
import "./style.css";

export default function CategoryShow() {
  const [currentPage, setCurrentPage] = useState(1);

  const [mycategory, setMycategory] = useState([]);
  const [currentShow, setCurrentShow] = useState('category');

  const [currentCategory, setCurrentCategory] = useState([]);
  const [searchNote, setSearchNote] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // New states for lower portion's date inputs
  const [lowerFromDate, setLowerFromDate] = useState('');
  const [lowerToDate, setLowerToDate] = useState('');

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/expenses', {
        action: 'getExpenseCategories'
      })
      .then((resp) => {
        console.log('Fetched categories:', resp.data);
        setMycategory(resp.data.categories);
      });
  }, []);

  const filterByDate = (data, from, to, dateField) => {
    return data.filter((item) => {
      const date = moment(item[dateField]);
      return (
        (!from || date.isSameOrAfter(moment(from, 'YYYY-MM-DD'))) &&
        (!to || date.isSameOrBefore(moment(to, 'YYYY-MM-DD')))
      );
    });
  };

  const handleDateSort = () => {
    if (currentShow === 'category') {
      const filteredCategories = filterByDate(mycategory, fromDate, toDate, 'updateDate');
      setMycategory(filteredCategories);
    } else if (currentShow === 'expense' && selectedCategory) {
      const filteredExpenses = filterByDate(selectedCategory.expenses, lowerFromDate, lowerToDate, 'date');
      setSelectedCategory({ ...selectedCategory, expenses: filteredExpenses });
    }
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentShow('expense');
  };

  const handleBackClick = () => {
    setCurrentShow('category');
    setSelectedCategory(null);
  };
  const onExpenseAdd = (expense) => {
    let currentCategory = mycategory.find((category) => category._id === expense.expenseCategory);
    if (currentCategory) {
      currentCategory.expenses.push(expense);
      setMycategory([...mycategory]);
    }
  };

  const onCategoryAdd = (newCategory) => {
    setMycategory([...mycategory, newCategory]); // Add new category to the list
  };
  const itemsPerPage = 8;
  let pageindexes = currentPage;
  const indexOfLastItem = currentPage * itemsPerPage;

  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mycategory.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mycategory.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [expensePage, setExpensePage] = useState(1);

  const expenseItemsPerPage = 4;
  let pageindese = expensePage;
  const expenseIndexOfLastItem = expensePage * expenseItemsPerPage;
  const expenseIndexOfFirstItem = expenseIndexOfLastItem - expenseItemsPerPage;
  const currentExpenses = selectedCategory?.expenses.slice(expenseIndexOfFirstItem, expenseIndexOfLastItem) || [];
  const totalExpensePages = Math.ceil((selectedCategory?.expenses.length || 0) / expenseItemsPerPage);

  const handleExpensePageClick = (pageNumber) => {
    setExpensePage(pageNumber);
  };

  return (
    <div className="catrgoryDivMain">
      <div className="row d-flex  catrgoryDivMain-2">
        <div className="col-md-4 me-3">
          <MyTab
            categories={mycategory}
            onExpenseAdd={onExpenseAdd}
            onCategoryAdd={onCategoryAdd}
          />
        </div>
        <div className="col-md-7 flex-grow-1">
          {currentShow === 'category' ? (
            <>
              <div className="bg-white ps-2 pt-2">
                <span>
                  <b>Sort By Dates</b>
                </span>
                <div className="mt-2 align-items-center d-flex">
                  <span className="me-2">From</span>
                  <input
                    className="w-25 form-control me-2"
                    type="date"
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                  <span className="me-2">To</span>
                  <input
                    className="w-25 form-control me-2"
                    type="date"
                    onChange={(e) => setToDate(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleDateSort}
                  >
                    Sort
                  </button>
                </div>
              </div>

              <div className="bg-white mt-3">
                <table className="table table-bordered myTable">
                  <thead>
                    <tr>
                      <th>NO</th>
                      <th>Expense Category</th>
                      <th>Office Asset</th>
                      <th>Expense Count</th>
                      <th>Total Expenses</th>
                      <th>Total VAT</th>
                      <th>Last Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((category, index) => (
                      <tr
                        key={category._id}
                        onClick={() => {
                          setCurrentCategory(category), handleCategoryClick(category);
                        }}
                      >
                        <td>{index + 1 + (pageindexes - 1) * itemsPerPage}</td>
                        <td>{category.catEnglishName}</td>
                        <td>{category.fromAssets ? <i className="fas fa-check"></i> : 'No'}</td>
                        <td>{category.expenses.length}</td>
                        <td>{category.expenses.reduce((sum, expense) => sum + expense.amount, 0)}</td>
                        <td>{category.expenses.reduce((sum, expense) => sum + expense.vatPercentage, 0)}</td>
                        <td>{moment(category.updateDate).format('L')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageClick(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, pageIndex) => (
                        <li
                          key={pageIndex}
                          className={`page-item ${currentPage === pageIndex + 1 ? 'active' : ''}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageClick(pageIndex + 1)}
                          >
                            {pageIndex + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handlePageClick(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="d-flex justify-content-between mb-2 bg-white align-items-center p-2">
                <div className="d-flex">
                  <div className="me-3">
                    <span className="">
                      <b>Category:</b>
                    </span>
                    <small>{currentCategory.catEnglishName}</small>
                  </div>
                  <div className="me-3">
                    <span>
                      <b>Office Assets:</b>
                    </span>
                    {currentItems.fromAssets ? <small>YES</small> : <small>No office Assist</small>}
                  </div>
                  <div className="me-3">
                    <span>
                      <b>Annual Decrement</b>
                    </span>
                  </div>
                </div>
                <div>
                  <button className="btn">Show</button>
                  <button className="btn">Edit</button>
                </div>
              </div>
              <div className="pt-2">
                <div className="row m-0 bg-white">
                  <div className="col-md-6 d-flex">
                    <div className="p-2">
                      <span>
                        <b>Count</b>
                      </span>
                      <div className="mt-1">{selectedCategory?.expenses.length || 0}</div>
                    </div>
                    <div className="p-2">
                      <span>
                        <b>Total</b>
                      </span>
                      <div className="mt-1">
                        {selectedCategory?.expenses.reduce((sum, expense) => sum + expense.amount, 0) || 0}
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="d-flex justify-content-between">
                        <span>
                          <b>Search In Table</b>
                        </span>
                        <div>
                          <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                      </div>
                      <div className="d-flex">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search by note"
                          onChange={(e) => setSearchNote(e.target.value)}
                        />
                        <div>
                          <button className="btn btn-primary">Search</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <span>
                      <b>Sort By Dates</b>
                    </span>
                    <div className="mt-2 align-items-center d-flex">
                      <span className="me-2">From</span>
                      <input
                        className="w-25 form-control me-2"
                        type="date"
                        onChange={(e) => setLowerFromDate(e.target.value)}
                      />
                      <span className="me-2">To</span>
                      <input
                        className="w-25 form-control me-2"
                        type="date"
                        onChange={(e) => setLowerToDate(e.target.value)}
                      />
                      <button
                        className="btn btn-primary"
                        onClick={handleDateSort}
                      >
                        Sort
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                {/* <button className="btn btn-primary mt-2" onClick={handleBackClick}>Back to Categories</button> */}
                <div onClick={handleBackClick}>
                  <i class="fa-solid fa-left-long arroricon"></i>
                  <div>
                    <h6>
                      <b>Go Back</b>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="bg-white mt-2">
                <table className="table myTable table-bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Expense Date</th>
                      <th>Expanse Category</th>
                      <th>Amount</th>
                      <th>VAT ammount</th>
                      <th>current Value</th>
                      <th>Note</th>
                      <th>edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentExpenses
                      ?.filter((expense) => searchNote === '' || expense.note.toLowerCase().includes(searchNote))
                      .map((expense, index) => (
                        <tr key={index}>
                          <td>{index + 1 + (pageindese - 1) * expenseItemsPerPage}</td>
                          <td>{moment(expense.date).format('L')}</td>
                          <td>{currentCategory.catEnglishName}</td>
                          <td>{expense.amount}</td>
                          <td>{expense.vatPercentage}</td>
                          <td>-</td>
                          <td>{expense.note}</td>
                          <td>
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-center">
                  <nav aria-label="Expense page navigation example">
                    <ul className="pagination">
                      <li className={`page-item ${expensePage === 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handleExpensePageClick(expensePage - 1)}
                          disabled={expensePage === 1}
                        >
                          Previous
                        </button>
                      </li>
                      {[...Array(totalExpensePages)].map((_, pageIndex) => (
                        <li
                          key={pageIndex}
                          className={`page-item ${expensePage === pageIndex + 1 ? 'active' : ''}`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handleExpensePageClick(pageIndex + 1)}
                          >
                            {pageIndex + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${expensePage === totalExpensePages ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => handleExpensePageClick(expensePage + 1)}
                          disabled={expensePage === totalExpensePages}
                        >
                          Next
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div>
                  <button className="btn btn-primary ">
                    <span>Expense Count: </span>
                    {selectedCategory?.expenses.length || 0}
                  </button>
                </div>
                {/* <button className="btn btn-primary mt-2" onClick={handleBackClick}>Back to Categories</button> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
