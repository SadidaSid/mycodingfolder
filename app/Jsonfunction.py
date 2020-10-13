#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import requests
import urllib3
import xmltodict
import json
    

def myjsonfunction():
    url='http://neocando.case.edu/cando/housingReport/lbxml.jsp?parcel=109-02-088'

    
    
   # read xml dataPage from url
    http = urllib3.PoolManager()
    xml_input = http.request('GET', url)
    
    # convert bundle xml main  tag to dictionary object
    xml_data_dictionary=xmltodict.parse(xml_input.data.strip())
    
    # convert dictionary object into json object
    json_data=json.dumps(xml_data_dictionary)
    
    #output json data
    print(json_data)
    return(json_data)