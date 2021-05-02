import numpy as np
import matplotlib.pyplot as plt
from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_val_score
from utilities import visualize_classifier

#input file containing data
input_file = 'data_multivar_nb.txt'
#load data
data = np.loadtxt(input_file, delimiter=',')
#X equal to all rows till second last columns, y equal to all rows only in last columns
X, y = data[:, :-1], data[:, -1]
#Create Naive Bayes classifier - Guarssian is anohter word for normal distribution
classifier = GaussianNB()
#Train the classifier
classifier.fit(X,y)
#Predict the values for training data
y_pred = classifier.predict(X)
accuracy = 100.0 * (y==y_pred).sum() / X.shape[0]
print("Accuracy of Naive Bayes classifier = ", round(accuracy,2),"%")
visualize_classifier(classifier, X, y)

#Split data into training and test data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=3)
classifier_new = GaussianNB()
classifier_new.fit(X_train, y_train)
y_test_pred = classifier_new.predict(X_test)
accuracy = 100.0 * (y_test==y_test_pred).sum()/X_test.shape[0]
print("Accuracy of new classifier = ",round(accuracy,2),"%")
visualize_classifier(classifier_new, X_test, y_test)

num_folds = 3
accuracy_values = cross_val_score(classifier, X, y, scoring='accuracy', cv=num_folds)
print("Accuracy: " + str(round(100*accuracy_values.mean(),2)) + "%")
precision_values = cross_val_score(classifier, X, y, scoring = 'precision_weighted', cv=num_folds)
print("Precision: " + str(round(100*precision_values.mean(),2)) + "%")
recall_values = cross_val_score(classifier, X, y, scoring ='recall_weighted', cv=num_folds)
print("Recall: " + str(round(100*recall_values.mean(),2)) + "%")
f1_values = cross_val_score(classifier, X, y, scoring = 'f1_weighted', cv=num_folds)
print("F1: " + str(round(100*f1_values.mean(),2)) + "%")
