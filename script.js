const sources = [
  "week 1_intro ML.pptx.pdf",
  "chap 5 machine learning part 1.docx.pdf",
  "week 2 _Regression.pptx.pdf",
  "regression 1.pptx.pdf",
  "logistic softmax.docx.pdf",
  "k means.pptx.pdf",
  "k means.docx.pdf",
  "Week 3 Decision tree.pptx.pdf",
  "Week 3 Decision tree tutorial.docx.pdf",
  "Chap 5 Decision-tree-docx.docx.pdf",
  "Mu_decisiontrees.pptx.pdf"
];

const priorities = [
  ["Decision trees: entropy, information gain, Gini, pruning", 96],
  ["Regression: linear, polynomial, R-squared, GD", 90],
  ["Classification metrics: confusion matrix, precision, recall, F1, AUC", 88],
  ["K-means: centroids, WCSS, silhouette, distance metrics", 86],
  ["ML types: supervised, unsupervised, semi-supervised, RL", 82],
  ["Logistic and softmax regression", 78]
];

const roadmap = [
  {
    title: "1. Learn the labels",
    body: "Separate AI, ML, deep learning, supervised, unsupervised, semi-supervised, and reinforcement learning. Many MCQs test definitions.",
    tags: ["AI basics", "ML types", "T, P, E"]
  },
  {
    title: "2. Memorize formulas",
    body: "Precision, recall, F1, R-squared, entropy, information gain, sigmoid, softmax, WCSS, Euclidean, and Manhattan appear repeatedly.",
    tags: ["Formulas", "Metrics"]
  },
  {
    title: "3. Practice calculations",
    body: "Do small numeric questions: precision from TP/FP, centroid mean, entropy max for 4 classes, information gain, F1.",
    tags: ["Numericals", "Exam traps"]
  },
  {
    title: "4. Know model choice",
    body: "Regression predicts continuous values, logistic/softmax classify, K-means clusters unlabeled data, decision trees classify and regress.",
    tags: ["Model selection", "Applications"]
  }
];

const notes = [
  {
    topic: "AI Basics",
    title: "AI, ML, Deep Learning",
    keywords: ["Artificial intelligence", "Machine learning", "Deep learning", "Symbolic AI", "Representations", "Hypothesis space"],
    points: [
      "AI is the broad effort to automate intellectual tasks normally performed by humans.",
      "Machine learning learns rules or useful representations from examples instead of relying only on manually written rules.",
      "Deep learning learns many successive layers of representations; the number of layers is the depth of the model.",
      "A well-defined ML task can be described by task T, performance measure P, and experience E.",
      "ML algorithms have representation, optimization, and evaluation components."
    ],
    traps: [
      "Do not say all AI is ML. Symbolic rule-based AI is AI but not necessarily ML.",
      "Deep learning is a subset of machine learning, not a separate replacement for it."
    ],
    pdfs: ["week 1_intro ML.pptx.pdf", "chap 5 machine learning part 1.docx.pdf"]
  },
  {
    topic: "AI Basics",
    title: "Types of AI and AI Applications",
    keywords: ["Narrow AI", "General AI", "Reactive machines", "Limited memory", "Turing Test", "Healthcare", "Autonomous vehicles", "Predictive maintenance"],
    points: [
      "Narrow AI is built for specific tasks; General AI would theoretically handle any intellectual task a human can.",
      "Reactive machines do not use past experience to guide current decisions. Limited memory systems can use recent or stored past data.",
      "In the Turing Test, a machine passes if a human evaluator cannot reliably distinguish it from a human through text conversation.",
      "Healthcare examples can combine computer vision for images and NLP for medical reports.",
      "Autonomous vehicles are hard because they must handle edge cases and make real-time decisions in unpredictable environments."
    ],
    traps: [
      "The Turing Test measures human-like conversation behavior; it does not prove true understanding.",
      "Predictive maintenance data is often noisy, high-dimensional, and imbalanced because failures are rare."
    ],
    pdfs: ["week 1_intro ML.pptx.pdf"]
  },
  {
    topic: "ML Types",
    title: "Supervised, Unsupervised, Semi-supervised, Reinforcement",
    keywords: ["Labelled data", "Classification", "Regression", "Clustering", "Association", "Reward", "Agent", "State-action pair"],
    points: [
      "Supervised learning uses labelled input-output pairs. Classification predicts discrete labels; regression predicts continuous values.",
      "Unsupervised learning receives input features without target labels and discovers patterns such as clusters or associations.",
      "Semi-supervised learning uses a small labelled set with a larger unlabelled set.",
      "Reinforcement learning has an agent, actions, environment feedback, rewards or penalties, and learning from state-action experience.",
      "Examples from the notes include purchase prediction, wind speed regression, customer grouping, AlphaGo, and self-driving systems."
    ],
    traps: [
      "Decision trees are supervised models but can do both classification and regression.",
      "A robotic arm learning from reward and penalty is reinforcement learning, not supervised learning."
    ],
    pdfs: ["chap 5 machine learning part 1.docx.pdf"]
  },
  {
    topic: "Regression",
    title: "Linear and Multiple Regression",
    keywords: ["Dependent variable", "Independent variable", "Residual", "Intercept", "Coefficient", "Bias", "Normal Equation", "Gradient Descent"],
    points: [
      "Regression models relationships between predictor variables and a numeric target variable.",
      "Linear regression predicts by a weighted sum of input features plus a bias or intercept term: y = wx + b.",
      "Multiple linear regression uses more than one predictor: Y = a + b1X1 + b2X2 + ... + bnXn.",
      "The Normal Equation is a closed-form way to compute parameters that minimize the cost function.",
      "Gradient Descent iteratively adjusts parameters to reduce a cost function such as MSE."
    ],
    traps: [
      "Accuracy is not the correct metric for ordinary regression; use error measures and goodness-of-fit metrics.",
      "A high learning rate can overshoot or oscillate; a very low learning rate learns slowly."
    ],
    pdfs: ["week 2 _Regression.pptx.pdf", "regression 1.pptx.pdf"]
  },
  {
    topic: "Regression",
    title: "Evaluation and Polynomial Regression",
    keywords: ["R-squared", "Adjusted R-squared", "SST", "SSE", "RMSE", "F-statistic", "Overfitting", "Regularization"],
    points: [
      "R-squared = (SST - SSE) / SST and explains how much target variance is explained by the model.",
      "R-squared ranges from 0 to 1. R-squared of 0.85 means 85% of target variance is explained by the model.",
      "Adjusted R-squared penalizes predictors that do not add useful value and is always less than or equal to R-squared.",
      "Polynomial regression adds powers or interaction terms as features while still fitting a linear model in those transformed features.",
      "High-degree polynomial regression can fit training data very well but may overfit, especially on small datasets."
    ],
    traps: [
      "R-squared is not classification accuracy.",
      "Increasing degree from 2 to 10 on a small dataset usually lowers training error but can increase test error."
    ],
    pdfs: ["week 2 _Regression.pptx.pdf", "regression 1.pptx.pdf"]
  },
  {
    topic: "Classification",
    title: "Logistic and Softmax Regression",
    keywords: ["Logistic regression", "Sigmoid", "Softmax", "OvR", "Multinomial", "Iris", "Cross-entropy"],
    points: [
      "Logistic regression is used as a classifier when the target variable is categorical.",
      "The sigmoid function maps any real input to a value between 0 and 1. Sigmoid(0) = 0.5.",
      "Softmax regression is used for mutually exclusive multi-class classification and normalizes probabilities so they sum to 1.",
      "One-vs-rest computes class probabilities independently, so probabilities may not sum exactly to 1.",
      "Feature scaling helps logistic regression converge faster and perform more reliably."
    ],
    traps: [
      "Logistic regression is classification despite the word regression.",
      "For a probability vector, the predicted class is the index with the highest probability."
    ],
    pdfs: ["week 2 _Regression.pptx.pdf", "logistic softmax.docx.pdf"]
  },
  {
    topic: "Classification",
    title: "Confusion Matrix and Metrics",
    keywords: ["Accuracy", "Precision", "Recall", "F1-score", "TP", "FP", "TN", "FN", "ROC", "AUC", "Imbalanced classes"],
    points: [
      "Accuracy is correct predictions divided by total samples.",
      "Precision = TP / (TP + FP). It answers: of predicted positives, how many were truly positive?",
      "Recall = TP / (TP + FN), also called True Positive Rate. It answers: of actual positives, how many were found?",
      "F1-score = 2PR / (P + R), useful when classes are imbalanced and both precision and recall matter.",
      "ROC plots TPR against FPR. AUC greater than 0.5 is better than random; below 0.5 is bad."
    ],
    traps: [
      "With 95% class 0 and 5% class 1, predicting everything as class 0 gives high accuracy but recall for class 1 is 0.",
      "Mean Squared Error and R-squared are regression metrics, not primary classification metrics."
    ],
    pdfs: ["week 2 _Regression.pptx.pdf", "Week 3 Decision tree tutorial.docx.pdf"]
  },
  {
    topic: "K-means",
    title: "K-means Clustering",
    keywords: ["Unsupervised learning", "Cluster", "Centroid", "Assignment", "Update", "WCSS", "Elbow", "Silhouette"],
    points: [
      "K-means groups unlabeled data into K clusters by repeatedly assigning points to nearest centroids and updating centroids as the cluster mean.",
      "Centroids are sensitive to initialization, so K-means is one of the algorithms most affected by initial cluster center placement.",
      "WCSS measures within-cluster compactness and is minimized when clusters are small and compact.",
      "If K equals the number of samples, each point can be its own cluster and WCSS becomes zero.",
      "Silhouette score can help select K when the elbow plot has no clear knee."
    ],
    traps: [
      "K-means is clustering, not classification, because it does not need target labels.",
      "A higher silhouette score is better, so choose K with the highest silhouette among candidates."
    ],
    pdfs: ["k means.pptx.pdf", "k means.docx.pdf"]
  },
  {
    topic: "K-means",
    title: "Distance Metrics",
    keywords: ["Euclidean", "Manhattan", "Minkowski", "Cosine similarity", "Hamming", "Continuous features", "Categorical data"],
    points: [
      "Distance defines similarity, so changing the metric can change cluster assignment or decision boundaries.",
      "Euclidean distance is straight-line L2 distance and is common for dense continuous features.",
      "Manhattan distance is city-block L1 distance and sums absolute coordinate differences.",
      "Minkowski generalizes Manhattan and Euclidean through parameter p.",
      "Cosine focuses on direction and is common for text or sparse high-dimensional vectors. Hamming counts mismatched categorical or binary positions."
    ],
    traps: [
      "Hamming distance is for categorical/binary mismatches and is not the usual choice for K-means with numeric centroids.",
      "There is no universal best metric; match it to the data and validate."
    ],
    pdfs: ["k means.pptx.pdf"]
  },
  {
    topic: "Decision Trees",
    title: "Tree Structure and Splitting",
    keywords: ["Root node", "Decision node", "Leaf node", "Splitting", "Pruning", "Entropy", "Information gain", "Gini"],
    points: [
      "Decision trees build classification or regression models in a tree structure.",
      "The root node is the top decision node and should correspond to a strong predictor.",
      "Decision nodes split data into branches; leaf nodes represent final decisions or predictions.",
      "A branch with entropy 0 is pure and becomes a leaf; entropy greater than 0 may need more splitting.",
      "Decision trees can handle numerical and categorical data and often need less feature scaling than many other models."
    ],
    traps: [
      "Decision trees are interpretable, not black-box by default.",
      "They automatically perform feature selection while choosing split attributes."
    ],
    pdfs: ["Week 3 Decision tree.pptx.pdf", "Chap 5 Decision-tree-docx.docx.pdf", "Mu_decisiontrees.pptx.pdf"]
  },
  {
    topic: "Decision Trees",
    title: "Entropy, Information Gain, Gini, Pruning",
    keywords: ["Homogeneity", "Impurity", "ID3", "C4.5", "CART", "Cost complexity pruning", "Reduced error pruning", "Overfitting"],
    points: [
      "Entropy measures impurity, disorder, or uncertainty. Higher entropy means a more mixed node.",
      "For 2 equally likely classes, maximum entropy is 1. For 4 equally likely classes, maximum entropy is 2.",
      "Information Gain = entropy(parent) - weighted entropy(children). Choose the split with highest information gain.",
      "Gini index is another impurity measure. CART uses Gini by default in many implementations and produces binary trees.",
      "Pruning reduces overly large trees to improve generalization and reduce overfitting."
    ],
    traps: [
      "If entropy drops from 0.9 to 0.6, information gain is 0.3.",
      "A tree grown too deep can memorize training data and perform poorly on test data."
    ],
    pdfs: ["Week 3 Decision tree.pptx.pdf", "Chap 5 Decision-tree-docx.docx.pdf"]
  },
  {
    topic: "Reinforcement",
    title: "RL, Q-learning, and Policies",
    keywords: ["Agent", "Environment", "Reward", "Penalty", "Q-value", "Policy", "Epsilon-greedy", "Learning rate"],
    points: [
      "Reinforcement learning improves behavior through reward feedback after actions.",
      "A Q-value Q(s, a) estimates expected cumulative reward after taking action a in state s and then following the optimal policy.",
      "A policy maps states to actions. In policy-based methods, it is often a probability distribution over actions given a state.",
      "Epsilon-greedy with epsilon = 0.1 chooses a random action 10% of the time and the best-known action 90% of the time.",
      "Policy-based methods handle continuous action spaces more naturally than tabular value-based methods."
    ],
    traps: [
      "A high learning rate can cause unstable Q-updates and failure to converge.",
      "The immediate reward is not the same as expected cumulative Q-value."
    ],
    pdfs: ["chap 5 machine learning part 1.docx.pdf", "week 1_intro ML.pptx.pdf"]
  }
];

const formulas = [
  { topic: "Regression", title: "Linear regression", formula: "y = wx + b", notes: ["w is weight/coefficient.", "b is bias/intercept.", "Use for continuous numeric prediction."] },
  { topic: "Regression", title: "Multiple linear regression", formula: "Y = a + b1X1 + b2X2 + ... + bnXn", notes: ["More than one predictor.", "Target variable is numeric."] },
  { topic: "Regression", title: "R-squared", formula: "R^2 = (SST - SSE) / SST", notes: ["Explains variance in the target.", "0.85 means 85% explained variance, not 85% accuracy."] },
  { topic: "Classification", title: "Sigmoid", formula: "sigmoid(z) = 1 / (1 + e^-z)", notes: ["Outputs 0 to 1.", "sigmoid(0) = 0.5."] },
  { topic: "Classification", title: "Softmax", formula: "softmax(zi) = e^zi / sum(e^zj)", notes: ["Produces class probabilities.", "Probabilities sum to 1 for mutually exclusive classes."] },
  { topic: "Classification", title: "Precision", formula: "Precision = TP / (TP + FP)", notes: ["Useful when false positives are costly.", "Example TP=80, FP=20 gives 0.8."] },
  { topic: "Classification", title: "Recall / TPR", formula: "Recall = TP / (TP + FN)", notes: ["Useful when missing positives is costly.", "Also y-axis of ROC curve."] },
  { topic: "Classification", title: "F1-score", formula: "F1 = 2 x Precision x Recall / (Precision + Recall)", notes: ["Balances precision and recall.", "P=0.9, R=0.8 gives 0.847."] },
  { topic: "Decision Trees", title: "Entropy", formula: "H(S) = - sum(pi log2 pi)", notes: ["Measures impurity.", "Four equally likely classes have entropy 2."] },
  { topic: "Decision Trees", title: "Information Gain", formula: "IG = H(parent) - weighted H(children)", notes: ["Choose highest IG.", "0.9 - 0.6 = 0.3."] },
  { topic: "Decision Trees", title: "Gini impurity", formula: "Gini = 1 - sum(pi^2)", notes: ["Lower is purer.", "Common split criterion in CART."] },
  { topic: "K-means", title: "WCSS", formula: "WCSS = sum over clusters sum ||x - centroid||^2", notes: ["Lower means compact clusters.", "K=n can produce WCSS 0."] },
  { topic: "K-means", title: "Euclidean distance", formula: "d = sqrt(sum((xi - yi)^2))", notes: ["Straight-line L2 distance.", "Common for continuous dense data."] },
  { topic: "K-means", title: "Manhattan distance", formula: "d = sum(|xi - yi|)", notes: ["City-block L1 distance.", "Can be more robust to outliers."] },
  { topic: "Reinforcement", title: "Q-value meaning", formula: "Q(s,a) = expected cumulative reward from state s and action a", notes: ["Includes future reward under a policy.", "Not just immediate reward."] }
];

const flashcards = [
  ["What is supervised learning?", "Training with labelled input-output examples."],
  ["Classification vs regression?", "Classification predicts discrete classes; regression predicts continuous numeric values."],
  ["What does y = wx + b represent?", "Linear regression prediction with weight w and bias b."],
  ["Sigmoid output range?", "Between 0 and 1. Sigmoid(0) equals 0.5."],
  ["Softmax is best for what?", "Mutually exclusive multi-class classification."],
  ["Precision formula?", "TP / (TP + FP)."],
  ["Recall formula?", "TP / (TP + FN)."],
  ["Why F1 for imbalanced data?", "It balances precision and recall when accuracy is misleading."],
  ["What is K-means?", "Unsupervised clustering by repeated nearest-centroid assignment and centroid update."],
  ["What is WCSS?", "Within-cluster sum of squares; lower means more compact clusters."],
  ["Entropy meaning?", "Impurity or uncertainty of a node."],
  ["Information gain formula?", "Parent entropy minus weighted child entropy."],
  ["Gini meaning?", "Impurity measure; lower means purer split."],
  ["Q(s,a) meaning?", "Expected cumulative reward after taking action a in state s and following the policy."],
  ["Epsilon = 0.1 means?", "Random action 10% of the time, best-known action 90% of the time."]
];

const practiceSets = {
  "week 1_intro ML": [
    ["Define machine learning using T, P, and E.", "A program learns from experience E with respect to task T and performance measure P if performance at T improves with E."],
    ["Why is deep learning called deep?", "It learns multiple successive layers of increasingly meaningful representations."],
    ["Give one limitation of the Turing Test.", "It can reward human-like deception or conversation style rather than prove true understanding."],
    ["Differentiate Narrow AI and General AI.", "Narrow AI solves specific tasks; General AI would perform broadly across intellectual tasks like a human."]
  ],
  "chap 5 machine learning part 1": [
    ["A robot gets reward for grasping and penalty for dropping. Which learning type?", "Reinforcement learning."],
    ["What is semi-supervised learning?", "Using a small labelled dataset together with a larger unlabelled dataset."],
    ["Give two unsupervised algorithms from the notes.", "K-means, DBSCAN, BIRCH, or hierarchical clustering."],
    ["Can decision trees handle categorical and numerical data?", "Yes."]
  ],
  "week 2 _Regression": [
    ["If R-squared is 0.85, what does it mean?", "85% of variance in the target is explained by the model."],
    ["Why can adding too many predictors be harmful?", "It can artificially increase R-squared and overfit the model."],
    ["Which graph is used for ROC?", "True Positive Rate on y-axis versus False Positive Rate on x-axis."],
    ["What is the target type in logistic regression?", "Categorical/classes."]
  ],
  "regression 1": [
    ["What does gradient descent minimize?", "A cost function such as MSE by iteratively changing parameters."],
    ["Batch GD vs stochastic GD?", "Batch uses the full training set each step; stochastic uses one random instance per step."],
    ["What happens with high-degree polynomial regression?", "Training fit improves, but overfitting risk increases."],
    ["What is regularization?", "Constraining model complexity, often by penalizing large weights."]
  ],
  "logistic softmax": [
    ["What is the difference between OvR and softmax probabilities?", "OvR computes independent class probabilities; softmax normalizes probabilities to sum to 1."],
    ["When should softmax be preferred?", "When classes are mutually exclusive."],
    ["Why scale features for logistic regression?", "It helps convergence and stable optimization."],
    ["For probabilities [0.45, 0.10, 0.30], what class is predicted?", "Class 0, because it has the highest probability."]
  ],
  "k means": [
    ["State the two repeating steps of K-means.", "Assign points to nearest centroid, then update centroids as cluster means."],
    ["If K = n, what is WCSS?", "Zero, because each point can be its own cluster."],
    ["If silhouette scores for K=3,4,5 are 0.45,0.52,0.41, choose K.", "K=4 because 0.52 is the highest."],
    ["Why do distance metrics matter?", "They define similarity and can change assignments or decision boundaries."]
  ],
  "Week 3 Decision tree": [
    ["What is entropy for [25,25,25,25]?", "2.000, because four equally likely classes have max entropy log2(4)."],
    ["If entropy falls from 0.9 to 0.6, what is information gain?", "0.3."],
    ["What is pruning?", "Reducing tree size after growth to improve generalization and reduce overfitting."],
    ["What split should a decision tree prefer?", "High information gain and low child impurity."]
  ],
  "Week 3 Decision tree tutorial": [
    ["Which sklearn metric creates a confusion matrix?", "confusion_matrix from sklearn.metrics."],
    ["What is a decision tree regression target?", "A numeric or continuous value."],
    ["Why split train and test data?", "To evaluate performance on unseen examples."],
    ["What does a leaf node represent?", "A final prediction, class, or decision."]
  ],
  "Chap 5 Decision-tree-docx": [
    ["What does ID3 use entropy for?", "To measure homogeneity and choose useful splits."],
    ["What improvement does C4.5 add for continuous attributes?", "It creates thresholds to split values above or below the threshold."],
    ["Name two pruning methods from the notes.", "Reduced error pruning and cost complexity pruning."],
    ["What happens when a node is completely homogeneous?", "Entropy is zero and it can become a leaf."]
  ],
  "Mu_decisiontrees": [
    ["What algorithm does Scikit-Learn use for decision trees?", "CART, which creates binary trees."],
    ["What does a node's value attribute show?", "The number of training instances of each class at that node."],
    ["How do decision trees help interpretability?", "Their splits create explicit rules and visible decision boundaries."],
    ["How can decision trees be restricted to avoid overfitting?", "Limit max depth, min samples, max leaves, or prune."]
  ]
};

const quizQuestions = [
  q("Regression", "Linear regression can be used to predict continuous numerical values.", ["True", "False"], 0, "Regression predicts continuous numeric targets."),
  q("Classification", "In logistic regression, the sigmoid function outputs values between 0 and 1.", ["True", "False"], 0, "The sigmoid maps real-valued inputs to probabilities in [0,1]."),
  q("Decision Trees", "Decision Trees can only be used for classification problems.", ["True", "False"], 1, "Decision trees can perform classification and regression."),
  q("K-means", "In K-means clustering, the algorithm groups data into _____.", ["Clusters", "Groups", "Class", "All of above"], 0, "The precise ML term is clusters."),
  q("Regression", "The equation y = wx + b represents _____ regression.", ["Logistic", "Polynomial", "Softmax", "Linear"], 3, "It is the basic linear model equation."),
  q("Classification", "What does the sigmoid function output for input 0?", ["0", "0.5", "1", "-1"], 1, "1 / (1 + e^0) = 1 / 2 = 0.5."),
  q("Reinforcement", "A robotic arm learns by reward for picking and penalty for dropping. This is:", ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Semi-supervised learning"], 2, "Reward and penalty feedback identify reinforcement learning."),
  q("Classification", "For probabilities [0.45, 0.10, 0.30, 0.10, 0.05], predicted class is:", ["0", "1", "2", "3"], 0, "Choose the class index with maximum probability, 0.45 at index 0."),
  q("Classification", "Best metric for highly imbalanced classification?", ["Accuracy", "F1-Score", "Mean Squared Error", "R-squared"], 1, "F1 balances precision and recall when accuracy can be misleading."),
  q("Classification", "TP=80, FP=20, TN=180, FN=20. Precision?", ["0.8", "0.9", "0.85", "0.75"], 0, "Precision = TP/(TP+FP) = 80/(80+20) = 0.8."),
  q("K-means", "Which algorithm is most sensitive to initial placement of cluster centers?", ["Hierarchical Clustering", "DBSCAN", "K-means", "Gaussian Mixture Models"], 2, "K-means starts with initial centroids and can converge to different solutions."),
  q("K-means", "WCSS is minimized when:", ["Clusters are as large as possible", "Clusters are small and compact", "All data points are in one cluster"], 1, "WCSS measures squared distance to centroids, so compact clusters lower it."),
  q("K-means", "Which distance metric is NOT appropriate for standard numeric K-means?", ["Euclidean Distance", "Manhattan Distance", "Cosine Similarity", "Hamming Distance for categorical data"], 3, "Hamming is for categorical/binary mismatches, not numeric centroid means."),
  q("Regression", "R-squared = 0.85 indicates:", ["85% of target variance is explained by the model", "15% explained", "85% accuracy", "85% error rate"], 0, "R-squared is explained variance, not accuracy."),
  q("Regression", "Increasing polynomial degree from 2 to 10 on a small dataset likely causes:", ["Both train and test error decrease", "Train error decreases, test error increases", "Train error increases, test error decreases", "Both increase"], 1, "High-degree polynomial models often overfit small datasets."),
  q("Reinforcement", "Q(s,a) represents:", ["Immediate reward", "Expected cumulative reward after action a in state s and following optimal policy", "Probability of action", "Count of action"], 1, "Q-values estimate long-term return, not only immediate reward."),
  q("Reinforcement", "In policy-based RL, policy is typically:", ["A value function", "A probability distribution over actions given a state", "A Q-table", "A reward function"], 1, "A policy maps states to action choices/probabilities."),
  q("Reinforcement", "Main advantage of policy-based methods over value-based methods?", ["Always more sample efficient", "Can handle continuous action spaces more naturally", "Require less computation", "Always globally optimal"], 1, "Direct policies can parameterize continuous actions."),
  q("Reinforcement", "Epsilon-greedy with epsilon=0.1 will:", ["Random 10%, best 90%", "Random 90%, best 10%", "Always best", "Always random"], 0, "Epsilon is exploration probability."),
  q("Reinforcement", "If Q-learning learning rate alpha is too high:", ["Learns very slowly", "May fail to converge or oscillate", "Always random", "Ignores future rewards"], 1, "Large updates can destabilize learning."),
  q("Decision Trees", "Information gain if entropy reduces from 0.9 to 0.6?", ["0.9", "0.3", "0.6", "1.5"], 1, "IG = 0.9 - 0.6 = 0.3."),
  q("Decision Trees", "Which Decision Tree statement is true?", ["Black-box model", "Automatically performs feature selection during splitting", "Requires feature scaling", "Guaranteed globally optimal tree"], 1, "Splitting selects useful features locally."),
  q("K-means", "Points A(1,1), B(1,2), C(2,1), centroid cluster near (1,1). New centroid?", ["(1.33, 1.33)", "(1, 1)", "(2, 2)", "(1.5, 1.5)"], 0, "Mean of (1,1),(1,2),(2,1) is (4/3,4/3)."),
  q("K-means", "If K = number of samples, WCSS is:", ["Maximum possible", "Minimum possible value zero", "Average pairwise distances", "Cannot be determined"], 1, "Each sample can be its own centroid, so within-cluster distance is zero."),
  q("K-means", "Silhouette scores K=3:0.45, K=4:0.52, K=5:0.41. Select:", ["3", "4", "5", "All equal"], 1, "Choose the highest silhouette score."),
  q("AI Basics", "Best describes Narrow AI vs General AI:", ["Narrow AI can do any task; General AI specific", "Narrow AI specific; General AI theoretically any intellectual human task", "Narrow AI neural, General AI rule-based", "Narrow AI requires labels"], 1, "Narrow is task-specific; General is broad human-level capability."),
  q("AI Basics", "Healthcare AI using both computer vision and NLP:", ["Predicting readmission using tabular data", "Analyzing chest X-rays and extracting report information", "Clustering patients", "RL treatment recommendations"], 1, "X-rays use vision; reports use NLP."),
  q("AI Basics", "Primary challenge in autonomous vehicles:", ["Lack of sufficient data", "Handle edge cases and real-time decisions in unpredictable environments", "Cannot process visuals", "Lack of sensors"], 1, "Real-world edge cases and real-time safety decisions are central."),
  q("AI Basics", "Key challenge in predictive maintenance:", ["Data always perfectly labelled", "Noisy high-dimensional imbalanced sensor data", "Machines never fail", "Schedules always optimal"], 1, "Failures are rare and sensor streams are noisy."),
  q("AI Basics", "A machine passes the Turing Test if:", ["Answers all questions perfectly", "Evaluator cannot distinguish it from human in text conversation", "100% benchmark accuracy", "Physically acts like human"], 1, "The classic test is text-based indistinguishability."),
  q("AI Basics", "Limitation of the Turing Test:", ["Requires physical interaction", "Measures human-like deception rather than true understanding", "Too difficult to implement", "Requires vision"], 1, "Passing conversation does not prove genuine intelligence."),
  q("AI Basics", "Reactive Machines vs Limited Memory AI:", ["Reactive have memory; limited does not", "Reactive cannot use past experience; limited memory can use past data briefly", "Reactive more advanced", "No distinction"], 1, "Limited memory systems can use recent/history data."),
  q("Classification", "Class 0 is 95%, class 1 is 5%, model predicts all class 0. Which metric is 0?", ["Accuracy", "Recall for Class 1", "Precision for Class 0", "F1-score for Class 0"], 1, "No class 1 positives are found, so recall for class 1 is zero."),
  q("Classification", "Precision=0.9 and Recall=0.8. F1-score?", ["0.847", "0.850", "0.833", "0.900"], 0, "F1 = 2(0.9)(0.8)/(1.7) = 0.847."),
  q("K-means", "Elbow plot is smooth with no clear knee. What should you do?", ["Choose K=2 arbitrarily", "Use Silhouette Score", "Choose K=number of features"], 1, "Silhouette score is a common alternative criterion."),
  q("Decision Trees", "Entropy for node distribution [25,25,25,25] across 4 classes?", ["1.000", "2.000", "0.500", "4.000"], 1, "Four equally likely classes: -4(0.25 log2 0.25) = 2."),
  q("Decision Trees", "Which split is preferred in ID3?", ["Lowest information gain", "Highest information gain", "Highest entropy children", "Random feature"], 1, "ID3 chooses the attribute producing the highest information gain."),
  q("Classification", "Accuracy is dangerous for imbalanced data because:", ["It cannot be computed", "A majority-class model can score high while missing minority cases", "It equals recall", "It is only for regression"], 1, "Predicting the majority class can hide minority-class failure."),
  q("Regression", "Adjusted R-squared is useful because it:", ["Always increases with predictors", "Penalizes useless added predictors", "Is classification accuracy", "Ignores model size"], 1, "It adjusts R-squared for number and usefulness of predictors."),
  q("K-means", "K-means belongs to which learning type?", ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"], 1, "It clusters unlabeled data."),
  q("Decision Trees", "A pure decision tree node has entropy:", ["0", "0.5", "1", "2"], 0, "Pure/homogeneous node has no uncertainty."),
  q("Classification", "Softmax probabilities should:", ["Be negative", "Sum to 1", "All equal 0.5", "Ignore largest score"], 1, "Softmax normalizes across classes."),
  q("Regression", "Stochastic gradient descent differs from batch GD by using:", ["All data each step", "One random instance each step", "No learning rate", "Only test data"], 1, "SGD estimates gradients from random individual examples."),
  q("Decision Trees", "Pruning mainly helps reduce:", ["Underfitting only", "Overfitting", "Feature scaling", "All entropy"], 1, "Pruning simplifies the tree to improve generalization.")
];

function q(topic, question, options, answer, explanation) {
  return { topic, question, options, answer, explanation };
}

let activeTopic = "All";
let activePractice = Object.keys(practiceSets)[0];
let cardIndex = 0;
let cardFlipped = false;
let currentQuiz = [];
let answered = new Map();

document.addEventListener("DOMContentLoaded", () => {
  renderPriority();
  renderRoadmap();
  renderFilters();
  renderNotes();
  renderFormulas();
  renderFlashcard();
  renderPracticeTabs();
  renderPractice();
  renderSources();
  setupQuiz();
  bindEvents();
});

function bindEvents() {
  document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("mobileNav").classList.toggle("hidden");
  });
  document.querySelectorAll("#mobileNav a").forEach(link => {
    link.addEventListener("click", () => document.getElementById("mobileNav").classList.add("hidden"));
  });
  document.getElementById("noteSearch").addEventListener("input", renderNotes);
  document.getElementById("prevCard").addEventListener("click", () => moveCard(-1));
  document.getElementById("nextCard").addEventListener("click", () => moveCard(1));
  document.getElementById("flashCard").addEventListener("click", () => {
    cardFlipped = !cardFlipped;
    renderFlashcard();
  });
  document.querySelectorAll("[data-calc]").forEach(btn => btn.addEventListener("click", calculate));
  document.getElementById("startQuiz").addEventListener("click", generateQuiz);
}

function renderPriority() {
  const wrap = document.getElementById("priorityList");
  wrap.innerHTML = priorities.map(([name, score]) => `
    <div class="priority-item">
      <div class="flex items-center justify-between gap-3 text-sm">
        <span class="font-bold">${name}</span>
        <span class="font-black text-moss">${score}</span>
      </div>
      <div class="bar"><span style="width:${score}%"></span></div>
    </div>
  `).join("");
  const avg = Math.round(priorities.reduce((sum, item) => sum + item[1], 0) / priorities.length);
  document.getElementById("coverageScore").textContent = `${avg}%`;
}

function renderRoadmap() {
  document.getElementById("roadmapGrid").innerHTML = roadmap.map(item => `
    <article class="road-card">
      <h3>${item.title}</h3>
      <p class="mt-2 text-sm leading-6 text-slate-600">${item.body}</p>
      <div class="tag-row">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderFilters() {
  const topics = ["All", ...new Set(notes.map(note => note.topic))];
  const row = document.getElementById("topicFilters");
  row.innerHTML = topics.map(topic => `<button class="filter-btn ${topic === activeTopic ? "active" : ""}" type="button" data-topic="${topic}">${topic}</button>`).join("");
  row.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTopic = btn.dataset.topic;
      renderFilters();
      renderNotes();
    });
  });
}

function renderNotes() {
  const search = document.getElementById("noteSearch").value.trim().toLowerCase();
  const filtered = notes.filter(note => {
    const inTopic = activeTopic === "All" || note.topic === activeTopic;
    const haystack = [note.title, note.topic, ...note.keywords, ...note.points, ...note.traps, ...note.pdfs].join(" ").toLowerCase();
    return inTopic && (!search || haystack.includes(search));
  });
  const grid = document.getElementById("notesGrid");
  grid.innerHTML = filtered.map(note => `
    <article class="note-card">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div>
          <span class="tag">${note.topic}</span>
          <h3 class="mt-3">${note.title}</h3>
        </div>
      </div>
      <div class="tag-row">${note.keywords.map(k => `<span class="tag">${k}</span>`).join("")}</div>
      <ul>${note.points.map(point => `<li>${point}</li>`).join("")}</ul>
      <div class="mt-4 rounded-lg border border-orange-200 bg-orange-50 p-3">
        <p class="text-xs font-black uppercase tracking-wide text-orange-800">Do not miss</p>
        <ul class="mt-1">${note.traps.map(trap => `<li>${trap}</li>`).join("")}</ul>
      </div>
      <p class="mt-3 text-xs font-bold text-slate-500">PDFs: ${note.pdfs.join(", ")}</p>
    </article>
  `).join("") || `<p class="rounded-lg border border-line bg-white p-4 text-slate-600">No notes matched your search.</p>`;
}

function renderFormulas() {
  document.getElementById("formulaGrid").innerHTML = formulas.map(item => `
    <article class="formula-card">
      <span class="tag">${item.topic}</span>
      <h3 class="mt-3">${item.title}</h3>
      <div class="formula-text">${item.formula}</div>
      <ul>${item.notes.map(note => `<li>${note}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function renderFlashcard() {
  const [front, back] = flashcards[cardIndex];
  const card = document.getElementById("flashCard");
  card.innerHTML = `
    <p class="label">${cardFlipped ? "Answer" : "Question"}</p>
    <p class="main">${cardFlipped ? back : front}</p>
    <p class="hint">Click card to flip</p>
  `;
  document.getElementById("flashCount").textContent = `Card ${cardIndex + 1} of ${flashcards.length}`;
}

function moveCard(direction) {
  cardIndex = (cardIndex + direction + flashcards.length) % flashcards.length;
  cardFlipped = false;
  renderFlashcard();
}

function renderPracticeTabs() {
  const tabs = document.getElementById("practiceTabs");
  tabs.innerHTML = Object.keys(practiceSets).map(name => `
    <button class="filter-btn ${name === activePractice ? "active" : ""}" type="button" data-practice="${name}">${name}</button>
  `).join("");
  tabs.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      activePractice = btn.dataset.practice;
      renderPracticeTabs();
      renderPractice();
    });
  });
}

function renderPractice() {
  const list = document.getElementById("practiceList");
  list.innerHTML = practiceSets[activePractice].map(([question, answer], index) => `
    <article class="practice-card">
      <span class="tag">${activePractice}</span>
      <h3 class="mt-3">Q${index + 1}. ${question}</h3>
      <button class="small-btn mt-4" type="button" data-answer="${index}">Show solution</button>
      <p id="practiceAnswer${index}" class="practice-answer text-slate-700"><strong>Answer:</strong> ${answer}</p>
    </article>
  `).join("");
  list.querySelectorAll("[data-answer]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(`practiceAnswer${btn.dataset.answer}`).classList.toggle("show");
    });
  });
}

function renderSources() {
  document.getElementById("sourceList").innerHTML = sources.map(file => `
    <article class="source-card">
      <p class="font-bold">${file}</p>
    </article>
  `).join("");
}

function setupQuiz() {
  const topics = ["all", ...new Set(quizQuestions.map(item => item.topic))];
  const select = document.getElementById("quizTopic");
  select.innerHTML = topics.map(topic => `<option value="${topic}">${topic === "all" ? "All topics" : topic}</option>`).join("");
  generateQuiz();
}

function generateQuiz() {
  answered = new Map();
  const topic = document.getElementById("quizTopic").value;
  const countValue = document.getElementById("quizCount").value;
  const pool = quizQuestions.filter(item => topic === "all" || item.topic === topic);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const count = countValue === "all" ? shuffled.length : Number(countValue);
  currentQuiz = shuffled.slice(0, count);
  renderQuiz();
  updateScore();
}

function renderQuiz() {
  const list = document.getElementById("quizList");
  list.innerHTML = currentQuiz.map((item, index) => `
    <article class="quiz-card" data-quiz-card="${index}">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <span class="tag">${item.topic}</span>
        <span class="text-xs font-black text-slate-500">Question ${index + 1}</span>
      </div>
      <h3 class="mt-3">${item.question}</h3>
      <div class="mt-3">
        ${item.options.map((option, optIndex) => `<button class="option-btn" type="button" data-q="${index}" data-opt="${optIndex}">${option}</button>`).join("")}
      </div>
      <p id="explain${index}" class="explain">${item.explanation}</p>
    </article>
  `).join("");
  list.querySelectorAll(".option-btn").forEach(btn => btn.addEventListener("click", chooseAnswer));
}

function chooseAnswer(event) {
  const btn = event.currentTarget;
  const qIndex = Number(btn.dataset.q);
  const optIndex = Number(btn.dataset.opt);
  if (answered.has(qIndex)) return;
  const item = currentQuiz[qIndex];
  answered.set(qIndex, optIndex === item.answer);
  const card = document.querySelector(`[data-quiz-card="${qIndex}"]`);
  card.querySelectorAll(".option-btn").forEach(optionBtn => {
    const idx = Number(optionBtn.dataset.opt);
    if (idx === item.answer) optionBtn.classList.add("correct");
    if (idx === optIndex && idx !== item.answer) optionBtn.classList.add("wrong");
  });
  document.getElementById(`explain${qIndex}`).classList.add("show");
  updateScore();
}

function updateScore() {
  const correct = [...answered.values()].filter(Boolean).length;
  document.getElementById("scoreText").textContent = `${correct} / ${currentQuiz.length}`;
  const answeredCount = answered.size;
  document.getElementById("scoreHint").textContent = `${answeredCount} answered, ${currentQuiz.length - answeredCount} remaining.`;
}

function calculate(event) {
  const type = event.currentTarget.dataset.calc;
  if (type === "precision") {
    const tp = Number(document.getElementById("tpInput").value);
    const fp = Number(document.getElementById("fpInput").value);
    const value = tp + fp === 0 ? 0 : tp / (tp + fp);
    document.getElementById("precisionOut").textContent = `Precision = ${value.toFixed(3)}`;
  }
  if (type === "f1") {
    const p = Number(document.getElementById("precisionInput").value);
    const r = Number(document.getElementById("recallInput").value);
    const value = p + r === 0 ? 0 : (2 * p * r) / (p + r);
    document.getElementById("f1Out").textContent = `F1 = ${value.toFixed(3)}`;
  }
  if (type === "gain") {
    const parent = Number(document.getElementById("parentEntropy").value);
    const child = Number(document.getElementById("childEntropy").value);
    document.getElementById("gainOut").textContent = `Gain = ${(parent - child).toFixed(3)}`;
  }
}
