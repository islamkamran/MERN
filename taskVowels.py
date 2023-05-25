
str = "My name IS islam KaAAmran"

vow = "aEiOu"
v=0
for i in str.lower():
    for j in i:
        if j in vow.lower():
            v+=1

print(f'the count is {v}')