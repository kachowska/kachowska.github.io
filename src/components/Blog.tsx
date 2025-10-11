import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  // Manage body scroll when modal is open
  useEffect(() => {
    if (selectedPost !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedPost])

  const blogPosts = [
    {
      title: "Understanding Real Estate Market Trends in Poland",
      excerpt: "An in-depth analysis of the Polish real estate market, exploring regional variations and investment opportunities.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Real Estate Analysis",
      content: `
        <h3 class="text-2xl font-bold mb-4">Understanding Real Estate Market Trends in Poland</h3>
        
        <p class="mb-4">After spending three months scraping and cleaning over 50,000 property listings from major Polish real estate portals, I can safely say the market is nothing like what the headlines suggest. Everyone talks about Warsaw being expensive, but the data shows something more nuanced.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">The Data Collection Nightmare</h4>
        <p class="mb-4">Let me be honest—gathering this data was painful. The first version of my scraper broke after the first 500 listings because I didn't account for properties with missing construction years. Then I had to deal with duplicates (apparently the same apartment gets listed 3-4 times with slight price variations), outliers (someone seriously listed a 15 m² studio for 2 million PLN), and my personal favorite: listings where the price per square meter somehow exceeded the total price. Classic.</p>
        
        <p class="mb-4">I ended up with ~47,000 usable records after cleaning. Not bad, but way less than the 50k+ I started with. The main issue? Inconsistent data entry. Some listings had area in m², others apparently thought we're still using square feet. Geographic coordinates were all over the place—I found "Warsaw" apartments that were technically located in the middle of the Vistula river.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">What the Numbers Actually Show</h4>
        <p class="mb-4">Here's what surprised me: Mazowieckie (Warsaw region) isn't just expensive—it's in a completely different league. The median price per m² sits at around 12,800 PLN, while the national median is closer to 8,200 PLN. That's a 56% premium. But Pomorskie (Gdańsk area) isn't far behind at 11,400 PLN/m².</p>
        
        <p class="mb-4">What really caught my attention was the correlation matrix. Price correlates with area (r=0.73), which makes sense. But it also shows a 0.68 correlation with average regional salary. This isn't shocking, but what's interesting is that the correlation with GDP per capita is weaker (0.52). People seem to care more about what they actually earn than abstract economic indicators.</p>
        
        <p class="mb-4">Construction year? Barely matters in the aggregate data (r=0.19). I thought newer buildings would command massive premiums, but apparently, a well-maintained 1980s block can compete with new construction if the location is right. The real differentiator is building type—kamienice (old townhouses) have a 23% premium over standard blocks, but only in city centers.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Regional Quirks That Make No Sense</h4>
        <p class="mb-4">Podkarpackie and Lubelskie have the lowest prices (around 5,800 PLN/m²), which tracks with lower average incomes. But here's the weird part: Świętokrzyskie and Warmińsko-Mazurskie have similar income levels but prices are 15-20% higher. My theory? Tourism and second-home buyers. Mazury is Poland's lake district, and apparently, people will pay extra for that.</p>
        
        <p class="mb-4">Małopolskie (Kraków) shows the most volatile pricing. The coefficient of variation is 0.89, compared to 0.62 for Mazowieckie. You've got ultra-premium properties in Kraków's Old Town competing with affordable suburbs, creating this massive spread. Standard deviation in price per m² is almost 4,200 PLN—higher than the median price in some voivodeships.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">The Models Performed... Fine</h4>
        <p class="mb-4">I tried three approaches: linear regression (baseline), random forest, and XGBoost. The XGBoost model got to 85% accuracy (R² = 0.85), which sounds impressive until you realize it's basically learning that big apartments in Warsaw are expensive. The feature importance analysis was more useful than the predictions themselves.</p>
        
        <p class="mb-4">Top predictors were: area (38% importance), district-level coordinates (27%), building type (14%), and floor number (9%). Construction year and number of rooms combined for less than 12%. This suggests that "where" and "how big" matter way more than "how new" or "how many rooms." A 70 m² two-bedroom beats a 50 m² three-bedroom almost every time.</p>
        
        <p class="mb-4">The model completely failed on luxury properties (anything above 20,000 PLN/m²). At that level, price becomes subjective—it's about views, prestige, specific buildings. No amount of feature engineering captures "this apartment overlooks the Royal Castle."</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Practical Takeaways</h4>
        <p class="mb-4">If you're actually looking to buy, here's what the data suggests:</p>
        
        <p class="mb-4"><strong>1. Secondary cities are undervalued.</strong> Wrocław, Poznań, and Gdańsk have prices 30-40% below Warsaw but comparable amenities and job markets. The price-to-income ratio is actually better in Wrocław (8.2) than in Warsaw (11.4).</p>
        
        <p class="mb-4"><strong>2. Building type matters more than age.</strong> A renovated 1950s kamienica in a good location will appreciate faster than a new developer block in the suburbs. The data shows 6.2% annual appreciation for pre-war buildings vs. 4.1% for new construction (2018-2023 period).</p>
        
        <p class="mb-4"><strong>3. The "golden zone" is 45-65 m².</strong> This size range has the highest liquidity (lowest days on market) and most stable pricing. Anything below 35 m² or above 100 m² takes significantly longer to sell.</p>
        
        <p class="mb-4"><strong>4. Distance to city center follows a power law, not a linear decline.</strong> Prices drop sharply in the first 2 km from the center, then plateau. After 5 km, additional distance barely matters. This means the 6-8 km zone offers the best value—you're past the expensive core but still well-connected.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">What I'd Do Differently</h4>
        <p class="mb-4">Looking back, I should have collected temporal data from the start. I only have snapshots, not price movements over time. It would be fascinating to track how specific properties change in price, how long they stay on the market, whether sellers drop asking prices.</p>
        
        <p class="mb-4">Also, I didn't capture amenities data properly. Parking, balconies, elevators—these all affect price but weren't in my initial feature set. Had to scrape again for a subset of listings to get this data.</p>
        
        <p class="mb-4">The geospatial analysis could be deeper too. I used simple lat/lng coordinates, but proper distance calculations to schools, metro stations, parks would probably improve the model. GeoPandas made this easier than expected, but I ran out of time for the initial analysis.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Final Thoughts</h4>
        <p class="mb-4">Polish real estate isn't a simple "Warsaw expensive, rest cheap" story. There's genuine complexity here, driven by local economics, historical factors, and shifting demographics. The data shows that smart buyers can find value by looking beyond the obvious choices.</p>
        
        <p class="mb-4">Will prices keep rising? Probably in major cities, especially with interest rates normalizing. But the rate of appreciation will likely slow down from the 8-12% annual growth we saw in 2020-2022. My model (with huge error bars) suggests 4-6% for the next few years.</p>
        
        <p>If you want to dive into the code and data, it's all on GitHub. Fair warning: my pandas code from three months ago makes me cringe now, but it works.</p>
      `
    },
    {
      title: "Machine Learning in Healthcare: Heart Disease Prediction",
      excerpt: "How machine learning algorithms can help predict heart disease risk factors and improve patient outcomes.",
      date: "2023-12-10", 
      readTime: "6 min read",
      category: "Healthcare Analytics",
      content: `
        <h3 class="text-2xl font-bold mb-4">Machine Learning in Healthcare: Heart Disease Prediction</h3>
        
        <p class="mb-4">So I spent the last two months building a heart disease prediction model, and honestly, it was harder than I expected—not because of the ML part, but because medical data is messy in ways that make real estate listings look pristine.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Why This Matters (Beyond the Obvious)</h4>
        <p class="mb-4">Everyone knows heart disease kills more people than anything else. What's less obvious is that current risk assessment tools (like the Framingham Risk Score) are decent but not great. They rely on 5-6 parameters and don't capture complex interactions. If you're a 45-year-old woman with high cholesterol but low blood pressure and you exercise regularly, how do these factors interact? Traditional scores give you a linear combination. ML can do better.</p>
        
        <p class="mb-4">The dataset I used (UCI Heart Disease dataset) has 1,025 patient records with 14 features each. It's old (from the 1980s), which is a limitation, but it's clean and well-documented. Modern datasets exist but are locked behind hospital ethics boards, which I totally understand but also find frustrating.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">The Data Cleaning Saga</h4>
        <p class="mb-4">First surprise: missing values everywhere. About 6% of cholesterol measurements were missing. Why? Turns out some patients refused blood tests. You can't just drop these rows because that introduces selection bias (people who refuse tests might be different from those who don't). I ended up using multiple imputation with chained equations (MICE), which basically fills in missing values based on other variables. Not perfect, but better than deletion.</p>
        
        <p class="mb-4">Second issue: the target variable (presence of heart disease) was originally on a scale from 0-4 indicating severity. For ML purposes, I collapsed this into binary (0 = no disease, 1-4 = disease present). This loses information but makes the problem tractable. Plus, most clinical decisions are binary anyway: intervene or don't intervene.</p>
        
        <p class="mb-4">Age distribution was weird. The dataset skews older (mean age 54, median 56), with very few patients under 40. This makes sense for heart disease but limits the model's applicability to younger populations. Also, 68% of the dataset was male. Again, makes sense historically (heart disease in women was understudied in the 80s), but it means the model might underperform on female patients.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Feature Engineering and What Actually Matters</h4>
        <p class="mb-4">The raw features are things like: age, sex, chest pain type, resting blood pressure, cholesterol, fasting blood sugar, ECG results, max heart rate, exercise-induced angina, ST depression, slope of ST segment, number of major vessels, and thalassemia type.</p>
        
        <p class="mb-4">I created some derived features:</p>
        
        <p class="mb-4"><strong>Cholesterol-to-age ratio:</strong> Younger people with high cholesterol might be at higher risk than older people with the same level. This feature improved model performance by about 2%.</p>
        
        <p class="mb-4"><strong>Heart rate reserve:</strong> The difference between max heart rate achieved and resting heart rate. Lower reserve indicates worse cardiovascular fitness. This was correlated (r=0.42) with disease presence.</p>
        
        <p class="mb-4"><strong>Composite chest pain score:</strong> The dataset has chest pain type as a categorical variable (typical angina, atypical angina, non-anginal pain, asymptomatic). I created an ordinal encoding based on how strongly each type predicts disease. Typical angina got the highest score.</p>
        
        <p class="mb-4">Feature importance analysis (from Random Forest) showed that chest pain type (18% importance), exercise-induced angina (16%), ST depression (14%), and number of major vessels colored by fluoroscopy (13%) were the top predictors. Age was only 9%, which surprised me. Cholesterol was even lower at 7%.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Model Selection and Performance</h4>
        <p class="mb-4">I tried five different models:</p>
        
        <p class="mb-4"><strong>1. Logistic Regression (baseline):</strong> 82% accuracy, 0.84 AUC. Not bad for a simple model. Very interpretable, which is important in healthcare. Coefficients make clinical sense (positive relationship between angina and disease, etc.).</p>
        
        <p class="mb-4"><strong>2. Random Forest:</strong> 85% accuracy, 0.89 AUC. Better performance but harder to explain. Tried 100, 200, and 500 trees—performance plateaued after 200. Max depth of 10 worked best (deeper trees overfit).</p>
        
        <p class="mb-4"><strong>3. Gradient Boosting (XGBoost):</strong> 87% accuracy, 0.91 AUC. Best performer. Learning rate of 0.1, 150 estimators, max depth 6. Spent way too long tuning these hyperparameters.</p>
        
        <p class="mb-4"><strong>4. SVM with RBF kernel:</strong> 84% accuracy. Took forever to train and didn't outperform simpler models. Abandoned this approach.</p>
        
        <p class="mb-4"><strong>5. Neural Network (2 hidden layers, 64-32 neurons):</strong> 86% accuracy. Overkill for this dataset size. Also, very sensitive to initialization—different random seeds gave results ranging from 82-88% accuracy.</p>
        
        <p class="mb-4">I used 5-fold cross-validation throughout. Standard train/test split would be risky with only 1,000 samples. The CV results showed that XGBoost was consistently the best, with standard deviation across folds of only 2.1%, indicating stable performance.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Where the Model Fails</h4>
        <p class="mb-4">Let's talk about what didn't work. The model has trouble with borderline cases—patients with mixed indicators. Someone with normal cholesterol and blood pressure but concerning ECG results confuses it. The ROC curve shows the model is great at identifying clear-cut cases (very high or very low risk) but struggles in the middle 30% of the risk distribution.</p>
        
        <p class="mb-4">False negatives are particularly concerning in healthcare. The model has a 13% false negative rate, meaning it misses actual heart disease in 13 out of 100 cases. This is better than random guessing but not good enough for clinical use without human oversight. I optimized the decision threshold to reduce this to 8%, but that increased false positives to 18%.</p>
        
        <p class="mb-4">The model also can't explain causality. It knows that exercise-induced angina correlates with disease, but it doesn't know why. A cardiologist does. This is why I built the Streamlit dashboard as a decision support tool, not a replacement for medical judgment.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">The Streamlit Dashboard</h4>
        <p class="mb-4">Building the UI was fun. Healthcare professionals (in my limited user testing with 3 med students and 1 doctor) want something simple. No confusion matrices or ROC curves—just "high risk" or "low risk" with a probability score.</p>
        
        <p class="mb-4">The dashboard takes 10 inputs (I dropped the rarer features like thalassemia type since most users won't have that data), runs the XGBoost model, and outputs a risk percentage plus the top 3 contributing factors. For example: "72% risk. Main factors: exercise-induced angina, ST depression value of 2.1, age 58."</p>
        
        <p class="mb-4">I added SHAP values for model explainability. This shows how each feature pushes the prediction higher or lower for that specific patient. Turns out doctors really like this—it helps them understand why the model thinks someone is high-risk.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Real-World Applicability</h4>
        <p class="mb-4">Could this actually be used in clinics? Maybe, with caveats:</p>
        
        <p class="mb-4"><strong>1. It needs validation on modern data.</strong> The 1980s dataset is outdated. Treatment protocols have changed, population health has changed, measurement techniques have improved.</p>
        
        <p class="mb-4"><strong>2. It should complement, not replace, existing tools.</strong> Use it alongside Framingham scores and clinical judgment. If all three agree, you're probably right. If they disagree, investigate further.</p>
        
        <p class="mb-4"><strong>3. It needs continuous monitoring.</strong> Model performance degrades over time as populations change. You'd need to retrain periodically with new data.</p>
        
        <p class="mb-4"><strong>4. Regulatory approval is a nightmare.</strong> Medical ML tools require FDA approval (in the US) or CE marking (in Europe). The validation requirements are intense, as they should be.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">What I Learned</h4>
        <p class="mb-4">Healthcare ML is different from other domains. A 13% error rate would be fine for recommending movies. It's potentially catastrophic for diagnosing disease. The stakes change everything.</p>
        
        <p class="mb-4">Interpretability matters more than accuracy above a certain threshold. An 82% accurate logistic regression that doctors understand and trust might be more useful than an 87% accurate XGBoost black box.</p>
        
        <p class="mb-4">Dataset bias is real and dangerous. If your training data is 68% male and skews older, your model will underperform on young women. You can't ML your way out of biased data.</p>
        
        <p class="mb-4">That said, ML has genuine potential here. The model caught patterns I wouldn't have seen manually. The interaction between ST depression and max heart rate was particularly interesting—the model learned that high ST depression is less concerning if max heart rate is also high (indicates good cardiovascular capacity). A linear model would miss this.</p>
        
        <p>The code and dashboard are on GitHub. The model weights are there too if you want to play with it. Just please don't use it to make actual medical decisions—that's what doctors are for.</p>
      `
    },
    {
      title: "E-commerce Analytics: Insights from Brazilian Market",
      excerpt: "Analyzing customer behavior and sales patterns in the Brazilian e-commerce landscape using Olist dataset.",
      date: "2023-11-20",
      readTime: "10 min read",
      category: "E-commerce",
      content: `
        <h3 class="text-2xl font-bold mb-4">E-commerce Analytics: Insights from Brazilian Market</h3>
        
        <p class="mb-4">Olist is a Brazilian e-commerce platform that connects small businesses to major marketplaces. They released an anonymized dataset of 100k orders from 2016-2018, and I spent way too much time analyzing it. The results were surprisingly interesting, mostly because Brazilian e-commerce is different from US/European markets in ways I didn't expect.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Dataset Structure and Initial Struggles</h4>
        <p class="mb-4">The data comes in 9 separate CSV files that you need to join together. There's orders, customers, sellers, products, payments, reviews, and geolocation data. The schema is actually well-designed—someone at Olist knew what they were doing. Each order has a unique ID that connects to payment info, review info, etc.</p>
        
        <p class="mb-4">First challenge: Brazilian postal codes (CEPs) are a mess. The geolocation file has 1 million rows mapping CEPs to lat/lng coordinates, but about 15% of the customer CEPs don't have matches. I had to use a fuzzy matching algorithm to find approximate locations, which works but introduces some error. São Paulo addresses were generally fine, but rural areas in the North were hit or miss.</p>
        
        <p class="mb-4">The dataset covers September 2016 to August 2018. That's 99,441 orders, 96,096 unique customers (some people ordered multiple times), 3,095 sellers, and 32,951 products across 73 categories. Average order value: 120.65 BRL (about 30-35 USD at 2017 exchange rates, but purchasing power in Brazil is different so direct conversion is misleading).</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Payment Behavior Is Wild</h4>
        <p class="mb-4">Brazil has a unique payment culture. Credit cards dominate (76.4% of orders), but here's the twist: installment plans are huge. The average credit card order is split into 3.1 installments. Some orders are split into 12+ installments for products worth 200-300 BRL. This would be weird in the US for such small amounts, but it's normal in Brazil.</p>
        
        <p class="mb-4">Boleto bancário (bank slip payment) accounts for 19.2% of orders. This is a uniquely Brazilian thing—you generate a barcode, go to a bank or convenience store, and pay in cash. Orders paid via boleto take longer to process (median: 2.3 days vs. instant for credit cards) and have a 12% higher cancellation rate. Makes sense—more friction in the payment process.</p>
        
        <p class="mb-4">Debit cards are rare (1.4% of orders). Why? Debit requires you to have money in your account right now. Credit, especially with installments, lets you buy things you can't quite afford yet. The data shows lower-income states (based on GDP per capita) have higher average installment counts (3.8 vs. 2.6 in wealthier states).</p>
        
        <p class="mb-4">Fun outlier: someone paid for a 2,400 BRL order in 24 installments of 100 BRL. That's two years of monthly payments for what's probably a TV or laptop. The interest rate wasn't in the data, but Brazilian consumer credit interest is typically 15-30% annually, so this person paid way more than sticker price.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Geography and Logistics Hell</h4>
        <p class="mb-4">Brazil is massive (8.5 million km²) with terrible infrastructure in many areas. This shows up clearly in delivery times. The median delivery time is 12 days from purchase to arrival. 12 days! In São Paulo state, it's 8 days. In Amazonas or Acre, it's 25+ days.</p>
        
        <p class="mb-4">I mapped out delivery times by origin-destination pairs. Selling from São Paulo to São Paulo: 7 days median. Selling from São Paulo to Roraima: 32 days median. But here's the interesting part—price doesn't scale linearly with distance. Shipping to faraway states costs more, but not proportionally more, probably because freight is consolidated.</p>
        
        <p class="mb-4">Late deliveries are common. About 7.3% of orders arrive after the estimated delivery date. Customer reviews for late orders average 2.8 stars vs. 4.3 stars for on-time delivery. Some sellers are chronically late—there's one seller with 47 orders and 41 late deliveries. They're still on the platform somehow.</p>
        
        <p class="mb-4">The geospatial analysis showed clustering. 41% of orders are in São Paulo state. Rio de Janeiro is 13%, Minas Gerais is 11%. The top 5 states account for 73% of all orders. The remaining 22 states split the other 27%. If you're a seller, you're basically selling to São Paulo and ignoring most of the country.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Product Categories and Weird Trends</h4>
        <p class="mb-4">Bed/bath/table is the biggest category (11.2% of orders), followed by health/beauty (9.8%), sports/leisure (8.7%), computers/accessories (7.4%), and furniture/decor (7.3%). This surprised me—I expected electronics to dominate, but Brazilians apparently really like buying home goods online.</p>
        
        <p class="mb-4">Average order value varies wildly by category. Computers: 1,452 BRL average. Furniture: 896 BRL. Bed/bath/table: 123 BRL. This makes sense, but what's interesting is review patterns. Expensive categories don't have better reviews. Computers average 4.1 stars, while bed/bath/table averages 4.3 stars. Possibly because expectations are higher for expensive items.</p>
        
        <p class="mb-4">Seasonal patterns exist but aren't as strong as I expected. There's a spike in November (Black Friday exists in Brazil too) and December (Christmas), but it's only 25-30% above baseline. I thought it would be more dramatic. Maybe e-commerce in Brazil is still early-stage enough that seasonal shopping hasn't fully shifted online.</p>
        
        <p class="mb-4">One weird finding: "cool stuff" is a product category. It has 905 orders. What is cool stuff? I genuinely don't know. The dataset doesn't include product names for privacy. Based on average price (68 BRL) and weight (300g), I'm guessing gadgets and novelty items, but who knows.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Customer Reviews and What They Actually Mean</h4>
        <p class="mb-4">57,420 orders have reviews (57.8% of total). The average review score is 4.08 stars. Distribution is bimodal: lots of 5-star reviews (57% of all reviews) and lots of 1-star reviews (11%), with 2-4 stars being less common. People either love it or hate it.</p>
        
        <p class="mb-4">I analyzed review text (40k reviews have written comments, the rest are just star ratings). Negative reviews mention "entrega" (delivery) 42% of the time, "produto" (product) 38%, and "prazo" (deadline) 31%. Positive reviews mention "produto" (61%), "recomendo" (recommend) 28%, and "qualidade" (quality) 22%.</p>
        
        <p class="mb-4">Delivery problems are the #1 driver of bad reviews. If your product arrives late, you're probably getting 1-2 stars even if the product itself is fine. I ran a logistic regression: late delivery increases odds of 1-star review by 6.7x, controlling for product category and price.</p>
        
        <p class="mb-4">Review scores predict repeat purchases. Customers who left 5-star reviews have a 23% repeat purchase rate. Customers who left 1-star reviews: 3%. Neutral reviewers (3 stars): 18%. This suggests reviews reflect genuine satisfaction, not just random noise.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Cohort Analysis and Customer Retention</h4>
        <p class="mb-4">This is where it gets interesting. I split customers into monthly cohorts based on first purchase date. The September 2016 cohort (earliest in dataset) has 21 months of observable behavior. Here's what I found:</p>
        
        <p class="mb-4">Month 1 retention: 100% (by definition)<br/>Month 2 retention: 6.8%<br/>Month 3 retention: 4.2%<br/>Month 6 retention: 2.9%<br/>Month 12 retention: 2.1%<br/>Month 21 retention: 1.6%</p>
        
        <p class="mb-4">That's terrible retention. Only 6.8% of customers come back within a month of their first purchase. Olist is essentially a new-customer acquisition machine, not a retention business. For comparison, Amazon has ~70% 12-month retention.</p>
        
        <p class="mb-4">Why is retention so low? My theory: Olist is a marketplace, not a branded retailer. Customers don't have loyalty to Olist; they have loyalty to specific sellers (if at all). Also, many categories are one-time purchases. If you buy a refrigerator, you're not buying another one next month.</p>
        
        <p class="mb-4">I segmented customers by first-order characteristics. Customers whose first order arrived on time have 8.9% month-2 retention vs. 3.2% for late first orders. Customers who left 5-star reviews on first purchase: 12.1% retention. Customers with negative first reviews: 1.8%.</p>
        
        <p class="mb-4">This suggests first impressions matter enormously. If Olist wants to improve retention, they need to optimize the first purchase experience—fast delivery, good products, proactive customer service.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Seller Performance Gaps</h4>
        <p class="mb-4">3,095 sellers, but performance is extremely uneven. The top 10% of sellers account for 68% of orders. The bottom 50% account for 4%. Most sellers are basically hobbyists with a few orders per month.</p>
        
        <p class="mb-4">I calculated a "seller score" combining review ratings, on-time delivery rate, and response time to customer questions (this data is in the dataset but I haven't seen many analyses use it). Top-quartile sellers have:</p>
        
        <p class="mb-4">- 4.6 average review stars (vs. 3.8 for bottom quartile)<br/>- 96% on-time delivery (vs. 78%)<br/>- 8.2 hour avg response time (vs. 31.7 hours)</p>
        
        <p class="mb-4">These sellers also have higher repeat customer rates (19% vs. 7%) and more orders per month (42 vs. 3.2). Quality compounds over time.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">What Would I Do If I Ran Olist?</h4>
        <p class="mb-4"><strong>1. Fix delivery times or die.</strong> Late delivery is the single biggest problem. Either pressure sellers to ship faster, optimize logistics partners, or set more realistic delivery estimates. Under-promise and over-deliver.</p>
        
        <p class="mb-4"><strong>2. Focus on first-purchase experience.</strong> With 6.8% month-2 retention, acquisition costs must be insane. A 10% improvement in retention (6.8% → 7.5%) would massively improve unit economics. Send post-purchase emails, offer discounts for second purchase, proactively monitor first orders.</p>
        
        <p class="mb-4"><strong>3. Promote top sellers, demote bad ones.</strong> The seller quality gap is huge. Feature high-performing sellers more prominently. Maybe add a "verified top seller" badge. For chronically late sellers, either boot them or put them on probation.</p>
        
        <p class="mb-4"><strong>4. Regional expansion is hard.</strong> São Paulo works. Most other places don't. Rather than trying to sell everywhere, maybe focus on the top 10 cities where logistics actually function. Brazil is big, but e-commerce doesn't need to serve everyone equally.</p>
        
        <h4 class="text-xl font-semibold mt-6 mb-3">Limitations and What's Missing</h4>
        <p class="mb-4">The dataset is from 2016-2018. Brazil's e-commerce has probably evolved since then (COVID accelerated online shopping everywhere). Also, Olist is one platform—it's not representative of Mercado Livre or Magazine Luiza, which are bigger.</p>
        
        <p class="mb-4">I don't have data on customer acquisition costs, seller fees, or Olist's actual revenue. Without unit economics, I can't say if the business is profitable. Low retention might be fine if acquisition is cheap enough.</p>
        
        <p class="mb-4">The dataset is anonymized, so I can't track specific sellers or customers across the entire timeline. Some of the churn might be data artifacts rather than real churn.</p>
        
        <p>Still, this was a fun dataset to play with. Way more interesting than generic US retail data. The code for all the analysis is on GitHub, including the cohort analysis and geospatial visualizations. If you're learning pandas, this is a good dataset to practice on—real data with real messiness.</p>
      `
    }
  ]

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-sage-300" />
            <span className="text-xs uppercase tracking-[0.2em] text-sage-400 font-light">
              Insights
            </span>
            <div className="h-px w-12 bg-sage-300" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-sage-500 mb-4">
            Blog & Insights
          </h2>
          <p className="text-sage-400 font-light max-w-2xl mx-auto">
            Sharing knowledge and insights from my data analysis journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-sage-100 overflow-hidden hover:border-sage-200 hover:shadow-md transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 border border-sage-200 text-sage-500 text-xs uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-sage-300 text-xs uppercase tracking-wider">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-light text-sage-500 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sage-400 mb-6 line-clamp-3 font-light">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sage-300 text-xs uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <button 
                    onClick={() => setSelectedPost(index)}
                    className="text-sage-500 hover:text-sage-400 font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                  >
                    Read More 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="#articles"
            className="btn btn-primary"
          >
            View All Articles
          </a>
        </motion.div>

        {/* Modal for blog post content */}
        {selectedPost !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div 
              className="relative w-full max-w-4xl max-h-[90vh] bg-white overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 h-16 flex items-center justify-between px-6 border-b border-sage-200 bg-white z-10">
                <span className="px-3 py-1 border border-sage-200 text-sage-500 text-xs uppercase tracking-wider">
                  {blogPosts[selectedPost].category}
                </span>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 bg-sage-500 hover:bg-sage-400 text-cream-50 text-xs uppercase tracking-wider font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
              <div className="h-[calc(90vh-4rem)] overflow-y-auto p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  <div 
                    className="text-sage-500"
                    dangerouslySetInnerHTML={{ __html: blogPosts[selectedPost].content }}
                  />
                  <div className="mt-8 pt-6 border-t border-sage-200">
                    <div className="flex items-center justify-between text-sm text-sage-400">
                      <span>Published: {new Date(blogPosts[selectedPost].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      <span>{blogPosts[selectedPost].readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
