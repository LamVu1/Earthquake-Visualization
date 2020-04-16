# [Earthquake Visualizer](https://lamvu1.github.io/Earthquake-Visualization/)

![alt text](https://github.com/LamVu1/Earthquake-Visualization/blob/master/src/assets/Peek%202019-12-14%2020-01.gif)

# Overview
California Earthquake Visualizer is a visualization web-application which displays earthquake events in California using Google Maps API.

## Features include:
- Use API from USGS to retreive earthquake data and Google Maps JavaScript API to display location of earthquakes.
- Use Chart.js to create interactive data visualization of events.
- Allow filtering of events by attributes such as date and magnitude.

# Technologies
- JavaScript
- [USGS API](https://earthquake.usgs.gov/fdsnws/event/1/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Chart.js library](https://www.chartjs.org/)


# Website Features
## Filtering of user input
Allow the users to input parameters such as minimum and maximum magnitude and date range. I used DOM manipulation to obtain the values the user inputted on the form and interpolate the values into the USGS api call.
![alt text](https://github.com/LamVu1/Earthquake-Visualization/blob/master/src/assets/Instructions.png)
![alt text](https://github.com/LamVu1/Earthquake-Visualization/blob/master/src/assets/filtering.png)


## Toggle features
Toggle map features such as magnitude, heat map, clustering, and location markers. Heat map displays distribution of events in the location from green to red indicating higher occurences of earthquakes.
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/Heatmap.png)
![alt text](https://app-ecommerce-seeds.s3-us-west-1.amazonaws.com/magnitude.png)

Magnitude will display circles with radius and color determined by earthquake magnitude. Color of the circle range from green indication low magnitude to red indicating high magnitude. The clustering feature will cluster nearby events together into a clustering marker when clicked will zoom in and display individual earthquake markers. This feature reduces cluttering of markers and indicate earthquakes in the same location. Location markers will mark the location of the earthquake and when clicked will display a popup window with the location, date, and magnitude of the event.
![alt text](https://github.com/LamVu1/Earthquake-Visualization/blob/master/src/assets/map.png)
![alt text](https://github.com/LamVu1/Earthquake-Visualization/blob/master/src/assets/circlecolors.png)

## Graphs and chart
Used Chart.js to create a line graph and a bar chart summarizing the earthquake events. The line graph will show the magnitudes of the earthquakes within the date range filtered. The bar chart will show the count of earthquakes in California by months and each bar will be colored in a red gradient.
![alt text](https://github.com/LamVu1/Earthquake-Visualization/blob/master/src/assets/graphs.png)
