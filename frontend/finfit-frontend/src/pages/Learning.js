import React, { useState } from "react";
import NavbarUser from "../components/Navbar_User";
import Footer from "../components/Footer";

function Learning() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState("");

  const topics = [
    {
      topic: "Budgeting",
      passage: `
        Budgeting is a fundamental skill for managing your finances. It involves tracking your income and expenses to ensure you're spending within your means and saving for the future. A popular budgeting method is the 50/30/20 rule, where 50% of your income goes to needs, 30% to wants, and 20% to savings and debt repayment. This method helps you allocate money in a structured way, making it easier to understand how much you can afford to spend and save. The key to successful budgeting is having a clear understanding of where your money is going.

When creating a budget, it's important to track all sources of income and categorize all expenses, from essentials like rent, groceries, and utilities to discretionary spending on entertainment, dining, and shopping. Over time, budgeting helps build a clear picture of your financial habits and can highlight areas where you may be overspending. Additionally, budgeting isn’t just about cutting back on unnecessary expenses; it’s also about making intentional decisions on how to use your money to achieve financial goals. Whether you’re saving for a vacation, an emergency fund, or a home, a well-structured budget helps you stay on track and make progress toward your goals.

Moreover, budgeting can help you break the cycle of living paycheck to paycheck and build the foundation for long-term financial stability. There are different methods for budgeting, such as zero-based budgeting, which requires you to allocate every dollar of income to specific expenses, or the envelope system, which involves setting aside cash in envelopes for various categories. Each method offers unique benefits, and the best one for you will depend on your lifestyle and financial goals. A budget is a living document that should be reviewed and adjusted regularly as your financial situation evolves.


      `,
      takeaways: [
        "Budgeting helps you track your income and expenses.",
        "The 50/30/20 rule is a simple way to allocate your income.",
        "Saving 20% of your income can help you build financial security.",
      ],
      quiz: {
        question: "What is the 50/30/20 rule?",
        options: [
          { answer: "A) A diet plan", correct: false },
          { answer: "B) A budgeting rule", correct: true },
          { answer: "C) A savings account type", correct: false },
        ],
      },
    },
    {
      topic: "Investing",
      passage: `
        Investing is the act of allocating money to assets such as stocks, bonds, mutual funds, or real estate with the expectation of earning a profit over time. The goal of investing is to generate a return on the initial amount of money you put into an asset. Unlike saving, which involves putting money in low-risk accounts to keep it safe, investing typically involves higher risks in exchange for potentially higher returns. When you invest, you’re purchasing an asset with the hope that it will grow in value over time, whether through appreciation (increased value) or income (such as dividends or rental income).

A common investment strategy is buying low and selling high. This means purchasing assets when their prices are lower, with the expectation that their value will increase over time. However, not all investments are guaranteed to increase in value, and the stock market, for example, can be volatile. It’s crucial to diversify your investments—spreading your money across various asset classes, such as stocks, bonds, and real estate—to mitigate risk and increase the likelihood of earning a positive return.

Investing can also involve different time horizons. Short-term investments are typically low-risk, such as savings accounts or short-term bonds, while long-term investments, like stocks or real estate, come with higher risks but also greater potential returns. The key to successful investing is understanding your risk tolerance and goals, which will guide your decisions. Over time, the power of compound interest—earning interest on both your initial investment and the accumulated interest—can significantly grow your wealth. The earlier you begin investing, the more time your money has to grow.

It’s also essential to consider the types of investments available. For example, stocks represent partial ownership in a company, and their value is tied to the company’s performance. Bonds, on the other hand, are debt instruments where you lend money to an organization in exchange for periodic interest payments. Real estate investments can provide rental income and the potential for property appreciation. The key is to diversify your portfolio to balance risk and ensure steady growth. It’s important to research, understand, and evaluate your investment choices before diving in, as each type comes with different risks and rewards.
      `,
      takeaways: [
        "Investing is about growing your wealth over time.",
        "You can invest in various assets like stocks, bonds, and real estate.",
        "The goal is to buy low and sell high, but risks are involved.",
      ],
      quiz: {
        question: "What is the primary goal of investing?",
        options: [
          { answer: "A) To save money for emergencies", correct: false },
          { answer: "B) To grow wealth over time", correct: true },
          { answer: "C) To spend money on luxury items", correct: false },
        ],
      },
    },
    {
      topic: "Credit Scores",
      passage: `
        A credit score is a numerical representation of your creditworthiness, based on your credit history and other financial behaviors. Lenders, landlords, and even some employers use your credit score to assess the likelihood that you will repay a debt or fulfill a financial obligation. Credit scores typically range from 300 to 850, with scores above 700 considered good and scores above 750 indicating excellent credit. The higher your credit score, the more likely you are to qualify for loans and credit cards with favorable terms, such as lower interest rates and higher credit limits.

Credit scores are calculated based on several key factors. The most significant factor is your payment history, which accounts for approximately 35% of your score. This includes whether you’ve made your credit card payments, loan repayments, and mortgage payments on time. The next most important factor is credit utilization, which makes up about 30% of your score. This is the ratio of your credit card balances to your credit limits. A lower ratio is better, indicating that you are not overburdened with debt.

Another key factor is the length of your credit history, which contributes about 15% to your score. The longer your credit history, the more reliable your credit profile appears to lenders. Credit mix (types of credit accounts you have) and recent credit inquiries (how often you apply for new credit) also impact your score, accounting for 10% and 10% respectively. Having a variety of credit types, such as credit cards, installment loans, and mortgages, can positively affect your score, but frequently applying for new credit can lower it.

Building and maintaining a good credit score is essential for financial success. A high credit score allows you to qualify for loans with lower interest rates, which can save you thousands of dollars over the life of the loan. It can also help you secure housing, rent a car, or get a job, as some employers check credit scores as part of their hiring process. To maintain a good credit score, make sure to pay bills on time, keep credit card balances low, avoid opening too many new credit accounts, and regularly check your credit report for errors. If you’re trying to rebuild a poor credit score, consider paying off existing debt, avoiding missed payments, and working on keeping your credit utilization low.


      `,
      takeaways: [
        "Credit scores range from 300 to 850, with higher scores being better.",
        "A good credit score can help you get favorable loan terms.",
        "Your credit score is influenced by your payment history, credit utilization, and other factors.",
      ],
      quiz: {
        question: "What is a credit score used for?",
        options: [
          { answer: "A) To determine your tax rate", correct: false },
          { answer: "B) To assess your creditworthiness", correct: true },
          { answer: "C) To track your spending habits", correct: false },
        ],
      },
    },
    {
      topic: "Retirement Planning",
      passage: `
        Retirement planning is the process of preparing for the financial demands of life after you stop working. It involves saving and investing money to support your lifestyle when you no longer have a steady paycheck. The earlier you start saving, the more time your money has to grow through compound interest. Retirement accounts, such as 401(k)s, IRAs, and pension plans, offer tax benefits and are designed specifically for retirement savings. The key is to assess your current financial situation and estimate how much you’ll need to maintain your desired lifestyle after retirement.

One of the best ways to plan for retirement is to take advantage of employer-sponsored retirement plans, such as a 401(k). Many employers match employee contributions, effectively providing "free money" toward your retirement. It's important to contribute enough to get the full match, as this can significantly boost your savings over time. If you’re self-employed or your employer doesn’t offer a 401(k), you can consider an IRA (Individual Retirement Account), which provides tax advantages while allowing you to save for the future.

Along with saving, retirement planning includes deciding on an appropriate investment strategy. A well-balanced portfolio, made up of stocks, bonds, and other assets, can grow your retirement savings over time. It’s essential to regularly review your retirement savings and make adjustments based on changes in income, expenses, and financial goals. The earlier you start planning and saving for retirement, the more likely you are to enjoy financial stability when the time comes to retire.
      `,
      takeaways: [
        "Start saving early to take advantage of compound interest.",
        "Evaluate different retirement accounts like 401(k)s and IRAs.",
        "Calculate how much money you'll need for a comfortable retirement.",
      ],
      quiz: {
        question: "What is a 401(k)?",
        options: [
          { answer: "A) A type of loan", correct: false },
          { answer: "B) A retirement savings account", correct: true },
          { answer: "C) A credit card", correct: false },
        ],
      },
    },
    {
      topic: "Taxes",
      passage: `
        Taxes are the financial charges that governments impose on individuals and businesses to fund public services such as schools, roads, healthcare, and national defense. The primary types of taxes include income tax, sales tax, and property tax. Income tax is based on the amount you earn, with rates typically increasing as your income increases. The more you earn, the higher your tax rate, which is why understanding how taxes work is crucial for managing your finances effectively.

        Income taxes are progressive, meaning the government takes a larger percentage from higher-income earners. Tax brackets are used to determine how much you owe based on your income level. Additionally, tax deductions and credits can lower your taxable income, reducing the amount you owe. Common deductions include mortgage interest, student loan interest, and medical expenses, while credits may apply to things like education expenses or child care. Understanding these options can help reduce your overall tax burden.

        Filing taxes can seem complicated, but it's important to stay organized and make sure you're reporting all income sources. Many people choose to work with tax professionals to ensure they comply with tax laws and maximize deductions. Keeping accurate records throughout the year will make tax season less stressful and help you avoid errors or missed opportunities to save money. Planning ahead and taking advantage of tax-deferred savings options like 401(k)s and IRAs can also reduce your taxable income.
      `,
      takeaways: [
        "Income taxes are based on your earnings and tax bracket.",
        "There are various tax deductions and credits to reduce your tax burden.",
        "State and local taxes can also affect your overall tax rate.",
      ],
      quiz: {
        question: "What is a tax bracket?",
        options: [
          { answer: "A) A loan payment schedule", correct: false },
          {
            answer: "B) A rate at which you are taxed based on income",
            correct: true,
          },
          { answer: "C) A savings account", correct: false },
        ],
      },
    },
    {
      topic: "Stock Market Basics",
      passage: `
        The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. When you buy stock, you’re purchasing a small ownership stake in the company, and your returns depend on how the company performs. Stocks can provide high returns, but they also come with risk. The value of your stock can rise or fall based on various factors like company performance, market conditions, and broader economic trends.

The two main types of stocks are common stocks and preferred stocks. Common stocks offer voting rights at shareholder meetings and the potential for dividends, but their value can be volatile. Preferred stocks, on the other hand, generally provide fixed dividends and take priority over common stocks in the event of liquidation, but they don’t typically offer voting rights. The stock market allows investors to diversify their portfolios by investing in various industries and sectors, which helps spread risk.

To invest successfully in the stock market, it’s important to understand stock valuation—the process of determining a stock's worth based on factors like earnings, revenue growth, and market conditions. Investors often analyze financial statements, track company news, and monitor market trends to make informed decisions. While the stock market can be volatile in the short term, it historically provides solid returns over the long term. Long-term investing and diversification are often recommended strategies for managing risk and optimizing returns.
      `,
      takeaways: [
        "Stocks represent ownership in a company, and their value can fluctuate.",
        "There are two types of stocks: common and preferred.",
        "Diversification helps reduce the risks associated with investing in stocks.",
      ],
      quiz: {
        question: "What is the primary risk of investing in stocks?",
        options: [
          { answer: "A) The stock price may decrease", correct: true },
          { answer: "B) The company always pays dividends", correct: false },
          {
            answer: "C) Stocks are guaranteed to increase in value",
            correct: false,
          },
        ],
      },
    },
    {
      topic: "Debt Management",
      passage: `
        Debt management is the process of handling personal debt in a way that minimizes financial strain and helps you pay off 
        outstanding obligations efficiently. The first step in managing debt is to assess all existing debts, including credit card 
        balances, student loans, mortgages, and personal loans. By understanding the total amount of debt you owe and the interest 
        rates associated with each debt, you can create a strategy for paying it off.

        One effective debt management strategy is the debt snowball method, where you focus on paying off the smallest debt first 
        while making minimum payments on larger debts. Once the smallest debt is paid off, you move to the next smallest debt, and so on. 
        This approach provides a sense of accomplishment and momentum as you eliminate smaller debts. Alternatively, the debt avalanche 
        method focuses on paying off the highest-interest debt first, which can save you more money in the long run.

        In addition to paying off existing debt, it's important to avoid accumulating more debt while you're in the process of paying off 
        current balances. This means controlling spending and not relying on credit cards for everyday expenses. If you're overwhelmed 
        by debt, you may consider options like debt consolidation, where you combine multiple debts into a single loan with a lower interest 
        rate, or debt settlement, which involves negotiating with creditors to reduce the total amount owed.
      `,
      takeaways: [
        "Prioritize high-interest debts to reduce financial strain.",
        "Avoid accumulating more debt while paying off existing balances.",
        "Consider consolidating multiple debts to simplify payments.",
      ],
      quiz: {
        question: "What is the debt snowball method?",
        options: [
          { answer: "A) Paying off the smallest debt first", correct: true },
          {
            answer: "B) Paying off the highest-interest debt first",
            correct: false,
          },
          {
            answer: "C) Consolidating all debts into one payment",
            correct: false,
          },
        ],
      },
    },
    {
      topic: "Emergency Funds",
      passage: `
         An emergency fund is a savings buffer that is used for unexpected expenses or financial emergencies. Whether it's medical bills, car repairs, or a sudden job loss, having an emergency fund can help you avoid going into debt when life throws curveballs. Financial experts recommend saving at least three to six months’ worth of living expenses in an easily accessible account. Having an emergency fund provides financial security and peace of mind. It ensures that you’re prepared for the unexpected without derailing your financial goals. Building an emergency fund should be a priority, and you can start small by setting aside a portion of your income each month. Gradually, you’ll accumulate enough to cover unexpected costs without relying on credit cards or loans.

It's important to keep your emergency fund in a liquid, low-risk account, such as a high-yield savings account, so that you can access the money when needed. Once your emergency fund is fully established, you can begin focusing more on other financial goals, like saving for retirement or investing. Having that safety net ensures that you won’t need to dip into long-term savings or incur high-interest debt when life’s surprises occur.

In addition to medical emergencies or unexpected repairs, an emergency fund is crucial for covering large, unexpected life events, such as losing a job, dealing with a major home repair, or even covering unexpected travel expenses due to a family emergency. Without this financial cushion, these events can lead to stress and financial strain, often resulting in the need to borrow money or rely on credit cards, both of which can create additional financial burdens.

Moreover, it's important to remember that an emergency fund is meant for true emergencies—things that are unforeseen and urgent. It should not be used for planned purchases or routine expenses. Establishing clear boundaries for how and when to use your emergency fund helps ensure that it’s available when you really need it, allowing you to weather the storm without compromising your financial health. Once you've built a robust emergency fund, you will feel more confident in your ability to manage financial setbacks and will have more control over your financial future.


      `,
      takeaways: [
        "An emergency fund provides financial security during unexpected events.",
        "Aim for 3-6 months of living expenses as a safety net.",
        "Keep your emergency fund in a high-yield savings account for easy access.",
      ],
      quiz: {
        question: "How much should you save in an emergency fund?",
        options: [
          { answer: "A) 1 month’s worth of expenses", correct: false },
          { answer: "B) 3-6 months’ worth of expenses", correct: true },
          { answer: "C) 1 year’s worth of expenses", correct: false },
        ],
      },
    },
    {
      topic: "Saving for College",
      passage: `
        Saving for college is an important step in preparing for higher education. There are several ways to save, including 529 plans, 
        custodial accounts, and regular savings accounts. A 529 plan, in particular, is a tax-advantaged account designed specifically for 
        educational expenses. Starting early and contributing consistently can help ease the burden of tuition and other college-related costs.

        In addition to a 529 plan, custodial accounts are another option, where a parent or guardian manages the funds on behalf of a minor 
        until they are of legal age. Regular savings accounts also work, though they don't offer the same tax advantages as 529 plans. 
        However, they can provide more flexibility for non-educational expenses. When choosing the best way to save, it’s important to consider 
        the costs of college, how much time you have before your child or dependent attends school, and the potential tax benefits.

        Starting early is key when saving for college. The earlier you begin saving, the more time you have to take advantage of compound 
        growth, which can significantly increase your savings. Setting up automatic contributions from your paycheck into a dedicated savings 
        or investment account can help you stay on track and make steady progress toward your goal.
      `,
      takeaways: [
        "529 plans offer tax advantages for saving for college.",
        "Starting early helps take advantage of compound growth.",
        "Consider other savings options like custodial accounts and regular savings.",
      ],
      quiz: {
        question: "What is a 529 plan?",
        options: [
          { answer: "A) A retirement savings account", correct: false },
          {
            answer: "B) A tax-advantaged savings plan for education",
            correct: true,
          },
          { answer: "C) A credit card", correct: false },
        ],
      },
    },
    {
      topic: "Insurance",
      passage: `
        Insurance is a financial product that provides protection against risks. By paying regular premiums, individuals and businesses can receive financial support in the event of unforeseen incidents, such as accidents, illnesses, or property damage. The most common types of insurance include health insurance, auto insurance, home insurance, and life insurance. Each type of insurance serves a specific purpose, providing peace of mind and ensuring that you are financially protected when needed. Health insurance covers medical expenses and helps manage the cost of healthcare. Auto insurance protects against the financial consequences of car accidents, including damage to your vehicle or others, and injuries. Home insurance provides coverage for property damage or loss, such as from natural disasters or theft. Life insurance offers financial support to beneficiaries in case of the policyholder's death, helping to cover funeral costs or living expenses for dependents.

Insurance can also be an essential tool for financial planning. While it might seem like an additional cost, the protection it provides can save you from incurring large, unmanageable expenses. When choosing an insurance plan, it's important to assess your needs, evaluate the coverage, and determine the appropriate premium to balance protection and affordability. For instance, someone with a family or dependents might prioritize life insurance to ensure their loved ones are financially secure after their passing. On the other hand, a young, healthy individual may focus more on affordable health and auto insurance options.

Additionally, there are other types of insurance that cater to specific needs, such as disability insurance, which provides income in the event of a temporary or permanent disability, or renters insurance, which protects renters against property loss or damage. Business owners can also benefit from various types of insurance, like liability insurance, which protects against legal claims for accidents or negligence. Understanding the different types of coverage available and the details of each policy will help you make informed decisions about your insurance needs.
      `,
      takeaways: [
        "Insurance provides protection against unexpected financial risks.",
        "Health, auto, home, and life insurance are common types of insurance.",
        "Insurance helps manage the costs of emergencies and gives peace of mind.",
      ],
      quiz: {
        question: "What does life insurance provide?",
        options: [
          { answer: "A) Coverage for health-related expenses", correct: false },
          {
            answer: "B) Financial support to beneficiaries after death",
            correct: true,
          },
          { answer: "C) Coverage for auto accidents", correct: false },
        ],
      },
    },
    {
      topic: "Personal Finance",
      passage: `
        Personal finance is the management of an individual’s financial activities, including budgeting, saving, investing, 
        and planning for future financial needs. A key principle of personal finance is creating a financial plan, which includes 
        setting short-term and long-term goals, establishing a budget, and determining how to save for large expenses like buying a house 
        or retirement. Personal finance also involves understanding the importance of credit management, insurance, and 
        tax planning.

        Good personal finance habits, such as saving a portion of your income regularly, paying bills on time, and maintaining a 
        good credit score, can help you build a solid financial foundation. One key aspect of personal finance is the ability to set 
        financial goals. These goals could range from building an emergency fund, paying off student loans, to saving for a down 
        payment on a house or retirement. By breaking large goals into smaller, manageable milestones, you can track your progress and 
        stay motivated.

        Investing is another crucial element of personal finance. It allows you to grow your wealth over time by purchasing assets that 
        have the potential to increase in value, such as stocks, real estate, and bonds. It’s also important to diversify your investments 
        to spread risk. Another essential component of personal finance is insurance, which provides protection against unexpected 
        events like accidents, illnesses, or property damage. Health insurance, life insurance, and property insurance are key areas 
        to consider in building a well-rounded financial plan.
      `,
      takeaways: [
        "Personal finance involves budgeting, saving, investing, and financial planning.",
        "Setting clear financial goals helps track progress and achieve objectives.",
        "Insurance is essential for protecting against unexpected financial risks.",
      ],
      quiz: {
        question: "What is the first step in personal finance management?",
        options: [
          { answer: "A) Buying insurance", correct: false },
          { answer: "B) Creating a financial plan", correct: true },
          { answer: "C) Saving for retirement", correct: false },
        ],
      },
    },
    {
      topic: "Inflation",
      passage: `
        Inflation is the rate at which the general level of prices for goods and services rises, leading to a decrease in the purchasing power of money. Essentially, as inflation increases, the value of your money decreases, meaning you can buy less with the same amount of money. Inflation is a normal part of the economy and can be caused by various factors, including increased demand for goods and services, higher production costs, and expansionary monetary policies (when the central bank increases the money supply).

        While moderate inflation is typical in a healthy economy, high inflation (or hyperinflation) can be detrimental. It erodes the value of savings, increases the cost of living, and can create uncertainty in the economy. Central banks, such as the Federal Reserve in the U.S., use interest rates as a tool to control inflation. When inflation is high, central banks may raise interest rates to reduce borrowing and spending, thereby slowing down the economy. Conversely, when inflation is low, central banks may lower interest rates to encourage borrowing and spending, stimulating economic activity.

        Inflation also affects different individuals and businesses in different ways. For consumers, rising prices can lead to higher costs for everyday goods, such as groceries and gas. On the other hand, some assets, like stocks and real estate, may see their values increase during inflationary periods. For investors, it's crucial to consider the impact of inflation on investment returns and to adjust investment strategies to hedge against inflation risks, such as investing in inflation-protected securities or real estate.
      `,
      takeaways: [
        "Inflation decreases the purchasing power of money.",
        "Central banks control inflation using interest rates.",
        "Inflation can benefit some assets (like real estate) but hurt savings.",
      ],
      quiz: {
        question: "What is the main effect of inflation?",
        options: [
          { answer: "A) Increases the value of money", correct: false },
          {
            answer: "B) Decreases the purchasing power of money",
            correct: true,
          },
          { answer: "C) Makes money easier to earn", correct: false },
        ],
      },
    },
    {
      topic: "Loans",
      passage: `
        A loan is a financial product where a borrower receives a specific amount of money from a lender and agrees to repay it over time with interest. Loans are used for various purposes, such as purchasing a home, financing education, or buying a car. The terms of the loan, including the interest rate, repayment schedule, and length of the loan, depend on the type of loan and the agreement between the borrower and the lender. There are many types of loans, such as personal loans, student loans, mortgages, and auto loans.

        The most common form of repayment is through fixed monthly payments, where the borrower pays a set amount every month until the loan is paid off. The interest rate on the loan is crucial because it affects how much you will pay over the life of the loan. A lower interest rate means you’ll pay less in interest, while a higher rate increases the overall cost of borrowing. Interest rates can vary depending on the loan type, the borrower’s creditworthiness, and the overall economic conditions.

        One important consideration when taking out a loan is your ability to repay it. Lenders assess the borrower’s credit history and income to determine the risk of lending money. If you fail to repay a loan, it can negatively impact your credit score, making it harder to borrow money in the future. Additionally, defaulting on a loan can lead to legal consequences and the loss of assets (for secured loans, like a mortgage or car loan).
      `,
      takeaways: [
        "A loan is borrowed money that must be paid back with interest.",
        "The interest rate on a loan determines how much you’ll pay in total.",
        "Your ability to repay a loan is crucial for maintaining a good credit score.",
      ],
      quiz: {
        question: "What happens if you fail to repay a loan?",
        options: [
          { answer: "A) Your credit score improves", correct: false },
          { answer: "B) You may face legal consequences", correct: true },
          { answer: "C) The loan interest rate decreases", correct: false },
        ],
      },
    },
    {
      topic: "Interest Rates",
      passage: `
        Interest rates play a pivotal role in the financial world and affect everything from loans to savings accounts. An interest rate is the percentage charged on a loan or paid on an investment. When you borrow money, the lender charges interest to compensate for the risk of lending and to earn a profit. When you deposit money into a savings account, the bank pays interest as a reward for holding your money.

        Interest rates are influenced by central banks, such as the Federal Reserve, which adjust rates to manage the economy. When inflation is high, central banks may raise interest rates to cool down borrowing and spending. Conversely, when the economy is sluggish, they may lower interest rates to encourage borrowing and investment. The rate you are charged for borrowing depends on various factors, including your creditworthiness, the length of the loan, and the prevailing interest rates in the market.

        Interest rates affect both borrowers and savers. For borrowers, high interest rates mean higher loan payments over time, which can impact your financial health. On the other hand, for savers, higher interest rates mean better returns on savings, helping your money grow faster. For example, a high-interest savings account or certificate of deposit (CD) offers better returns than a standard savings account. Understanding how interest rates work is crucial for making informed financial decisions, whether you’re taking out a loan or saving money.
      `,
      takeaways: [
        "Interest rates affect both the cost of borrowing and the return on savings.",
        "Central banks control interest rates to influence economic activity.",
        "Higher interest rates increase loan payments but can benefit savers.",
      ],
      quiz: {
        question: "How do central banks influence interest rates?",
        options: [
          {
            answer: "A) By setting fixed interest rates for all loans",
            correct: false,
          },
          {
            answer: "B) By adjusting rates to manage economic activity",
            correct: true,
          },
          {
            answer: "C) By determining interest rates based on inflation rates",
            correct: false,
          },
        ],
      },
    },
    {
      topic: "Savings and Checking Accounts",
      passage: `
        Savings and checking accounts are essential financial tools for managing personal finances. A checking account is primarily used for everyday transactions, such as paying bills, receiving direct deposits, and withdrawing cash. It's a convenient way to manage your day-to-day expenses, as it allows for easy access to your money through checks, debit cards, and online transfers. Most checking accounts don’t earn much interest, but they typically offer unlimited withdrawals and transfers, making them highly liquid.
    
        On the other hand, a savings account is designed for saving money over the long term. Unlike checking accounts, savings accounts usually offer higher interest rates, allowing your money to grow over time. However, they come with restrictions on the number of withdrawals you can make each month. This makes savings accounts ideal for putting aside money for goals like building an emergency fund, saving for a down payment on a house, or preparing for future expenses. The interest earned on savings accounts is typically compounded, meaning that the more money you save, the more interest you will earn.
    
        One key difference between these two accounts is accessibility. While checking accounts offer easy and frequent access to your funds, savings accounts are intended to be less accessible, encouraging individuals to save for the future. When choosing between the two, it’s important to consider your financial needs. Many people use both accounts simultaneously—keeping money for everyday expenses in a checking account, while setting aside funds for future goals in a savings account. By using both accounts strategically, you can manage your finances more effectively and work toward achieving both short-term and long-term financial goals.
      `,
      takeaways: [
        "Checking accounts are used for everyday transactions and are easily accessible.",
        "Savings accounts offer higher interest rates and are best for long-term savings.",
        "Using both types of accounts helps you manage day-to-day expenses and save for the future.",
      ],
      quiz: {
        question:
          "What is the main difference between a checking and a savings account?",
        options: [
          {
            answer: "A) Checking accounts offer higher interest rates",
            correct: false,
          },
          {
            answer:
              "B) Savings accounts are designed for long-term saving and earn interest",
            correct: true,
          },
          {
            answer:
              "C) Checking accounts are only available for a limited time",
            correct: false,
          },
        ],
      },
    },
  ];

  const goToNextTopic = () => {
    const nextTopicIndex = (currentTopicIndex + 1) % topics.length;
    setCurrentTopicIndex(nextTopicIndex);
    setQuizFeedback("");
  };

  const handleQuizSubmit = (answer) => {
    const correctAnswer = topics[currentTopicIndex].quiz.options.find(
      (option) => option.correct
    );
    setQuizFeedback(
      answer === correctAnswer.answer
        ? "Correct! Well done!"
        : "Incorrect. Try again."
    );
  };

  const currentTopic = topics[currentTopicIndex];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)] text-gray-900">
      <NavbarUser />
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center">
          Financial Literacy Learning
        </h1>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">
            Today's Topic: {currentTopic.topic}
          </h2>{" "}
          <p className="mt-2 text-gray-700">{currentTopic.passage}</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Key Takeaways</h3>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {currentTopic.takeaways.map((takeaway, index) => (
              <li key={index}>{takeaway}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Test Your Knowledge</h3>
          <p className="mt-2">{currentTopic.quiz.question}</p>
          <div className="flex flex-col gap-2 mt-4">
            {currentTopic.quiz.options.map((option, index) => (
              <button
                key={index}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                onClick={() => handleQuizSubmit(option.answer)}
              >
                {option.answer}
              </button>
            ))}
          </div>
          {quizFeedback && (
            <p className="mt-2 font-semibold text-blue-600">{quizFeedback}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            onClick={goToNextTopic}
          >
            Next Topic
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Learning;
