# reshtat = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N']
cordinates = []
# L/111
reshtat = ['A','B','C','D','E','F','G']


width = 9
height = 9
left = 117
top = 104
marginW = 1.2
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 26):
        if ulsa >= 18 and resht == "G":
            break
        cords = []
        if ulsa == 1:
            cords.append(left)
        else:
            cords.append(left + ((ulsa-1)  * (width + marginW)))

        if reshtiID == 1:
            cords.append(top)
        else:
            cords.append(top - ((reshtiID-1) * marginH))

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "L111", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)



# L/110
reshtat = ['A','B','C','D','E','F']

width = 8
height = 9
left = 395
top = 104
marginW = 1.6
marginH = 16.5


reshtiID = 0
shtesa = 0
for resht in reshtat:
    reshtiID += 1
    left = 395
    shtesa = 0
    for ulsa in range(1, 31):
        if ulsa >= 11 and resht == "F":
            break
        if ulsa >= 23 and resht == "C":
            break
        if ulsa >= 23 and resht == "D":
            break
        if ulsa >= 22 and resht == "E":
            break

        if ulsa >= 12 and resht == "C":
            shtesa = 77
        if ulsa >= 12 and resht == "D":
            shtesa = 77
        if ulsa >= 12 and resht == "E":
            shtesa = 77

        cords = []
        if ulsa == 1:
            cords.append(left)
        else:
            cords.append(left + shtesa + ((ulsa-1)  * (width + marginW)))

        if reshtiID == 1:
            cords.append(top)
        else:
            cords.append(top - ((reshtiID-1) * marginH))

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "L110", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)



# L/109
reshtat = ['A','B','C','D']

width = 9
height = 9
left = 705
top = 104
marginW = 1.2
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 26):
        if ulsa >= 17 and resht == "D":
            break
        cords = []
        if ulsa == 1:
            cords.append(left)
        else:
            cords.append(left + ((ulsa-1)  * (width + marginW)))

        if reshtiID == 1:
            cords.append(top)
        else:
            cords.append(top - ((reshtiID-1) * marginH))

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "L109", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)


# P/101
# reshtat = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N']
reshtat = ['N','M','L','K','J','I','H','G','F','E','D','C','B','A']

width = 9
height = 9
left = 120
top = 825.5
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    # for ulsa in range(1, 26):
    for ulsa in range(25, 0, -1):
        cords = []
        if ulsa == 1:
            cords.append(left)
        else:
            cords.append(left + ((ulsa-1)  * (width + marginW)))

        if reshtiID == 1:
            cords.append(top)
        else:
            cords.append(top - ((reshtiID-1) * marginH))

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "P101", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)


# P/102
reshtat = ['N','M','L','K','J','I','H','G','F','E','D','C','B','A']

width = 8
height = 9
left = 402.5
top = 825.5
marginW = 1.6
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 31):
    # for ulsa in range(30, 0, -1):   
        cords = []
        if ulsa == 1:
            cords.append(left)
        else:
            cords.append(left + ((ulsa-1)  * (width + marginW)))

        if reshtiID == 1:
            cords.append(top)
        else:
            cords.append(top - ((reshtiID-1) * marginH))

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "P102", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)

# P/103
reshtat = ['N','M','L','K','J','I','H','G','F','E','D','C','B','A']

width = 9
height = 9
left = 713
top = 825.5
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    # for ulsa in range(25, 0, -1):
    for ulsa in range(1, 26):
        cords = []
        if ulsa == 1:
            cords.append(left)
        else:
            cords.append(left + ((ulsa-1)  * (width + marginW)))

        if reshtiID == 1:
            cords.append(top)
        else:
            cords.append(top - ((reshtiID-1) * marginH))

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "P103", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)


# V/112
reshtat = ['A','B','C']

width = 9
height = 9
left = 44.5
top = 624
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 22):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left - ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "V113", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)

# V/113
reshtat = ['A','B','C']

width = 9
height = 9
left = 44.5
top = 385.5
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 22):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left - ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "V112", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)


# J/104
reshtat = ['A','B','C']

width = 9
height = 9
left = 994
top = 626
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 22):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left + ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "J104", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)


# J/105
reshtat = ['A','B','C']

width = 9
height = 9
left = 994
top = 387
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 22):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left + ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "J105", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)


# J/106
reshtat = ['A','B','C']

width = 9
height = 9
left = 1112
top = 571
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 20):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left + ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "J106", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)
# print(cordinates)345

# J/107
reshtat = ['A','B','C']

width = 9
height = 9
left = 1112
top = 346
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 20):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left + ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "J107", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)



# J/108
reshtat = ['A','B','C','D','E','F','G','H','I']


width = 9
height = 9
left = 1012.5
top = 115
marginW = 1.4
marginH = 16.5


reshtiID = 0
for resht in reshtat:
    reshtiID += 1
    for ulsa in range(1, 9):
        cords = []

        if reshtiID == 1:
            cords.append(left)
        else:
            cords.append(left + ((reshtiID-1) * marginH))


        if ulsa == 1:
            cords.append(top)
        else:
            cords.append(top - ((ulsa-1)  * (height + marginW)))

        
            

        cords.append(9)
        cords.append(9)
    
        cordinates.append({"regionId": "J108", "rowID": resht, "sitId": ulsa, "cords": cords.copy()})
    
wrtStr = "export const cordinates = ["
for itemCords in cordinates:
    wrtStr += str(itemCords) + ",\n";
wrtStr = wrtStr + "]"

with open('cordinates.js','w') as f:
    f.write(wrtStr)