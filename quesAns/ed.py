import re



f=open("bch-mock.ques.txt","r+");
b=f.read();
#sp=re.findall(r"<b.*/>",b);
b=re.sub("##","#",b);
sp=re.sub(r"(<b.*/>)|(<b.*\>)","##",b);
print(sp);
f.close()
f=open("bch-mock.ques.txt","w").write(sp);
