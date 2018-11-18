from datetime import datetime

# Data to serve with our API
POPULATION = {
    "1": {
        "year": 2010,
        "inhabitants": 139860
    },
    "2": {
        "year": 2011,
        "inhabitants": 140966
    },
    "3": {
        "year": 2012,
        "inhabitants": 141569
    },
    "4": {
        "year": 2013,
        "inhabitants": 141463
    },
    "5": {
        "year": 2014,
        "inhabitants": 141465
    },
    "6": {
        "year": 2015,
        "inhabitants": 141398
    },
}

# Create a handler for our read (GET) Population
def read():
    """
    This function responds to a request for /api/cf
    with the complete lists of population

    :return:        sorted list of population
    """
    # Create the list of Population from our data
    return [POPULATION[key] for key in sorted(POPULATION.keys())]