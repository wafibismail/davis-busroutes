<div align=center>
  <h1>About</h1>
  <h2>This repository</h2>
  <p>This is a repository for source files for the <i>CI5304: Data Analytics and Visualization (DAVIS)</i> module's group assignment.</p><br />
  <table>
    <tr><th>Content</th><th>Description</th></tr>
    <tr><td><a href=notebook.ipynb>notebook.ipynb</a></td><td>Python notebook file imported from Colab</td></tr>
    <tr><td><a href=raw_dataset>main.ts</a></td><td>Directory containing the 26 .csv files</td></tr>
    <tr><td><a href=main.ts>main.ts</a></td><td>Entry point for the web-app</td></tr>
  </table>
  <hr>
</div>

## This project
### Raw data
A month's (26 .csv files) worth of records were provided containing the following features:</p>
- **bus id** $\in \\{13\\}$ - Bus identifier. In all .csv files provided, all records belong to bus #13
- **route id** $\in \\{8\\}$ - Route identifier. All records belong to route #8
- **place*n*** where $n \in \\{1, 2, ... 9\\}$ - Bus stop identifier
- **timestamp*n*_in** where $n \in \\{1, 2, ... 9\\}$ - Time of day $\in (\text{06:00},\text{23:59})$ at which the bus is recorded to arrive at this stop
- **timestamp*n*_out** where $n \in \\{1, 2, ... 9\\}$ - Time of day $\in (\text{06:00},\text{23:59})$ at which the bus is recorded to depart from this stop

In total, the 26 .csv files contains 270 rows, each containing (though in some cases missing) the above data.

### Instruction assigned
We were free to do as we please with the dataset and with the knowledge we learned from the module pretaining to Data Analytics and Visualization. We were also referred to the paper [Non-GPS-based ETA Models Constructed from Historical GPS Data and Traffic Contexts](https://ieeexplore.ieee.org/abstract/document/10147536) which similarly applies Machine Learning techniques to extract valuable information and construct prediction models which utilize a similar albeit larger dataset. We have thus decided to closely follow the approach taken in that project.

The concepts used mostly are similar to the ones applied in the aforementioned project. However the steps in producing the results are fully from our own mental and physical effort.
