with open("file.txt", "r") as text:
    res = []
    res.append(text.read())

def slesh_n_and_t_delete(res):    # slesh_n_and_t_delete function that delete '\t' and  '\n' in a list.
    string_result = ""
    for x in res:
        x = x.replace('\n', '')
        x = x.replace('\t', '')
        x = x.replace('"', '\'')
        string_result += x
    return string_result



with open("file.txt", "w") as result:
	result.write(res)
