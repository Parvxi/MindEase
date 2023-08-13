# MindEaseApp
MindEase is an application that takes EEG data from the Emotiv device and uses ML to predict whether the person using the device is stressed or not.

## About MindEase
The application uses Emotiv's EEG measurement technology to collect data from the user's brain activity. The EEG data is processed and analyzed using machine learning algorithms that have been trained to identify patterns associated with stress. The application then makes a prediction based on the data analysis.

## Mindease application architecture

This picture represent the architecture of Mindease application :)

<div>
  <img src="photo/application architecture.jpg" width="500" hight="300">
</div>

## Mindease application front-end 

<div>
  <img src="photo/MindEase front-end.jpg" width="500" hight="300">
</div


## Mindease application Methodology

The methodology in our project involves four main steps: 

• EEG Signal Data Acquisition: The project involved placing 5 EEG electrodes on 
specific positions on the subject's head to read neural signals. The Emotiv EPOC Flex 
hardware and software were used to record the raw data.

• Preprocessing: The collected neural data experienced preprocessing steps to filter out 
noise and artifacts.

• Feature Extraction: Feature extraction techniques, including statistical measures such as 
mean, minimum, and standard deviation, are employed to preprocess the EEG dataset, 
effectively reducing noise, eliminating artifacts, and removing irrelevant information.

• Machine Learning Model: The LSTM model is trained using a labeled dataset of EEG 
samples with associated emotion labels. During training, the model learns to map the 
extracted features from EEG signals to the respective emotion classes.
