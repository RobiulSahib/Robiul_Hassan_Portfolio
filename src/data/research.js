export const researchData = {
  title: "A System to Support Mental Health of Rural Women",
  status: "Defended",
  period: "May 2025 – August 2026",
  institution: "Department of Computer Science and Engineering, BRAC University",
  supervisors: [
    {
      name: "Dr. Amitabha Chakrabarty",
      title: "Supervisor",
      role: "Professor / Associate Professor",
      url: "https://cse.bracu.ac.bd/faculty_profile/69/dr_amitabha_chakrabarty"
    },
    {
      name: "Dewan Ziaul Karim",
      title: "Co-Supervisor",
      role: "Senior Lecturer",
      url: "https://cse.bracu.ac.bd/faculty_profile/63/dewan_ziaul_karim"
    }
  ],
  overview: `In rural Bangladesh, mental health disorders among women are heavily stigmatized, under-reported, and neglected due to a severe shortage of localized healthcare infrastructure and clinical professionals. This research developed an automated, machine-learning-driven screening framework that assesses clinical indicators of depression and anxiety from natural Bangla and Banglish conversational speech and transcribed text.`,
  technicalHighlights: [
    "Extracted clinical acoustic vocal biomarkers using the standard extended Geneva Minimalistic Acoustic Parameter Set (eGeMAPS).",
    "Generated contextual text representations utilizing state-of-the-art Multilingual E5 text embeddings to capture nuanced Bangla/Banglish emotional expressions.",
    "Formulated a late-fusion multimodal architecture to aggregate acoustic probability distributions with semantic textual features.",
    "Mitigated severe clinical dataset class imbalance using Synthetic Minority Over-sampling Technique (SMOTE) with rigorous stratified cross-validation.",
    "Benchmarked multiple machine learning algorithms including Linear SVM, RBF SVM, Random Forest, Gradient Boosting, K-Nearest Neighbors, and Logistic Regression."
  ],
  results: [
    {
      task: "Depression Detection",
      modality: "Text (Multilingual E5 Embeddings)",
      classifier: "Linear SVM",
      accuracy: "94.12%",
      macroF1: "93.77%",
      rocAuc: "1.00",
      highlight: true,
      badge: "Best Overall Model"
    },
    {
      task: "Anxiety Detection",
      modality: "Multimodal Late Fusion (Text + Speech)",
      classifier: "Late Decision Fusion",
      accuracy: "91.18%",
      macroF1: "89.67%",
      rocAuc: "0.95+",
      highlight: true,
      badge: "Multimodal Fusion"
    },
    {
      task: "Anxiety Detection (Voice Only)",
      modality: "Audio (eGeMAPS Acoustic Features)",
      classifier: "RBF SVM",
      accuracy: "88.24%",
      macroF1: "86.56%",
      rocAuc: "0.91",
      highlight: false,
      badge: "Acoustic Benchmark"
    }
  ],
  keywords: [
    "Machine Learning",
    "Speech Processing",
    "Acoustic Feature Extraction",
    "eGeMAPS",
    "Multilingual E5 Embeddings",
    "Support Vector Machines (SVM)",
    "Multimodal Late Fusion",
    "Natural Language Processing",
    "Bangla / Banglish NLP",
    "SMOTE",
    "Mental Health Informatics"
  ]
};
