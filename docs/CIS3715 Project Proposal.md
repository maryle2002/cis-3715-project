Eric Nguyen, Mary Le

Professor Hongchang Gao

CIS 3715 - Principles of Data Science

March 30, 2023

# Project Proposal - Handwritten Digit Recognition

**Introduction**

Handwritten digit recognition is a challenging computer vision problem due to the many variations each digit can be written.
A digit can be written in a large or small font, in curved or jagged strokes, or can be written in an otherwise distorted manner (e.g., noise, shift, skew, etc.).
Further, many digits share common patterns such as the round curves that are found in digits 0, 2, 3, 5, 6, 8, and 9 or are written in a similar stroke such as 1 and 7 which can make it difficult to distinguish different digits.

The Modified National Institute of Standards and Technology (MNIST) data set is a data set created in 1998 consisting of labeled handwritten digits in a 28x28x1 (width, height, channel) image format with a train set of 60,000 images written by a group of 250 contributors and a test set of 10,000 images written by a separate group of 250 contributors; amounting to approximately 11.6 megabytes (MB) for the entire dataset which is formatted as sequences of bytes and compressed into GZIP format \[1\].
This data set is a modified subset of the National Institute of Standards and Technology (NIST) data set created in 1995 which is composed of 814,255 digit and alphabetical character images.
To obtain these images, NIST coordinated a group of high school students and a group of Census Bureau employees to fill out a total of 3669 so-called "Handwriting Sample Forms" (HSF) from which each digit and alphabetic character written in the HSFs were segmented into a 128x128 binary image and labeled one of 62 ASCII classes ranging from "0"-"9", "A"-"Z" and "a"-"z" \[2\].
The MNIST data set uses the images of digits from the NIST data set and normalizes each of those images into a 20x20 box, retaining the aspect ratio.
The binary images are turned into grayscale as a result of anti-aliasing techniques used in the normalization process and are centered in a 28x28 box.
The MNIST data set is a great introduction to computer vision because all of the data is already preprocessed and it has been reviewed and tested countless times in academic literature and research, showing that it is a reliable data set to use \[3\].

For our project, we are proposing to work on the _Digit Recognizer_ challenge on Kaggle \[4\] where the challenge is to correctly identify the digits as provided in the MNIST data set.
For the purposes of the Kaggle competition, 42,000 images are used for training and 28,000 images are used for testing with the images provided as comma-separated value (CSV) files, amounting to approximately 128 MB in total.
The first column of the Kaggle train set specifies the label of the digit and the remaining 784 columns represent the image's pixel grayscale values which range from 0 to 255.
The Kaggle test set follows a similar format as the train set except it excludes the label column---this is what we will use to generate our submission file.
In our submission to the Kaggle competition, we will generate a CSV file with an _ImageId_ column and a _Label_ column with our predictions for each image which will be scored based on accuracy.

In a review of the literature regarding handwritten digit recognition of the MNIST data set, we find that the best-performing approaches for this task use a majority voting ensemble of convolutional neural networks (CNN) with state-of-the-art results achieving 99.91% accuracy on the MNIST test data set \[5\]. Indeed, the approach of using an ensemble of CNNs has seen success in similar competitions, such as the _Inclusive Images Challenge_ on Kaggle \[6\] where the top-scoring solutions used this same approach to label objects found in high-resolution, natural images with 1.7 million images to label and over 7000 labels to choose from. Alternative approaches to handwritten digit recognition include using linear neural networks, k-nearest neighbors (KNN), boosted stumps, non-linear neural networks, support vector machines (SVM), and multi-layer neural networks which all perform relatively well (many of these approaches already achieve \>97% accuracy) with the worst performing model being the single layer linear neural network getting an error rate of 12% (i.e., 88% accuracy) \[1\].

**Proposed work**

Before we start working on building a model for handwritten digit recognition, we need to understand the data we are working with through exploratory data analysis (EDA). As such, our first step will be to explore the data set by plotting samples from the data set, detecting class imbalance, and calculating the statistics of the features.

Once we complete the EDA process, we will determine if there is any need to preprocess the dataset such as splitting the data into training and validation sets, applying feature scaling, augmenting the data, and applying dimensionality reduction through principal components analysis (PCA). We already know that the data does not have any categorical features or missing values, so it is not necessary to check for these.

After preprocessing our data set, we will begin working on a baseline model using KNN and Euclidean distance as our distance metric.
Additionally, we will apply grid search cross-validation to determine optimal hyperparameters such as the number of neighbors to use for our model.

As a final step, we will construct an improved model using a majority vote ensemble of three different CNNs.
The CNNs will be optimized using the adaptive moment estimation (Adam) algorithm with a cross-entropy loss objective.
The CNN architecture does not significantly affect our model performance, so we will opt to use simple CNN architectures such as those used in the state-of-the-art approach \[5\].
While these architectures use batch normalization layers, we may also experiment with other normalization layers such as group normalization, instance normalization, and layer normalization.
Normalization layers are commonly used to improve model performance as well as help training convergence.

**Timeline**

Week 1 (Mar 27)

- Project proposal

Week 2 (Apr 03)

- Start working on EDA + baseline model

- Progress report I

Week 3 (Apr 10)

- Start working on improved model and deployment

Week 4 (Apr 17)

- Progress report II

Week 5 (Apr 24)

- Lightning talk

- Final report

**References**

\[1\]
[http://yann.lecun.com/exdb/mnist/index.html](http://yann.lecun.com/exdb/mnist/index.html)
(MNIST Database)

\[2\]
[https://www.nist.gov/srd/nist-special-database-19](https://www.nist.gov/srd/nist-special-database-19)
(NIST Special Database 19)

\[3\]
[https://ieeexplore.ieee.org/document/726791](https://ieeexplore.ieee.org/document/726791)
(Gradient-based learning applied to document recognition)

\[4\]
[https://www.kaggle.com/competitions/digit-recognizer](https://www.kaggle.com/competitions/digit-recognizer)
(Digit Recognizer Kaggle Competition)

\[5\]
[http://arxiv.org/abs/2008.10400](http://arxiv.org/abs/2008.10400)
(An Ensemble of Simple Convolutional Neural Network Models for MNIST
Digit Recognition)

\[6\]
[https://www.kaggle.com/competitions/inclusive-images-challenge](https://www.kaggle.com/competitions/inclusive-images-challenge)
(Inclusive Images Kaggle Competition)
