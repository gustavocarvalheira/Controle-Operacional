import xml.etree.ElementTree as ET
tree = ET.parse('xml_teste.xml')
root = tree.getroot()

#print(ET.tostring(root, encoding='utf8').decode('utf8'))

for elem in root.iter():
    if elem.tag == "{TransactionDataOfRequest}success":
        #print(elem.tag)
        print(elem.text)
    if elem.tag == "{TransactionDataOfRequest}request":
        #print(elem.tag)
        print(elem.text)
    
