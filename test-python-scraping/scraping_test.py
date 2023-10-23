import sys
import re
import json
import requests
from bs4 import BeautifulSoup

def main():
    #html取得
    soup = get_soup("http://www.sej.co.jp/i/products/onigiri/")

    # おにぎり情報を取得 -> 辞書型に整形
    oniDict = {}
    subject = soup.find(id="main")
    category = subject.find_all(class_="subCategory")
    for c in category:
        oniDict[title] = {}
        title = c.find_previous("h2").string
        item = c.find_all(class_="item")
        for i in item:
            name = i.find(class_="itemName").string
            price = i.find(class_="price").string
            taxEx = re.match("[0-9]*円", price).group(0).replace("円", "")
            taxIn = re.sub("税込|円", "", re.search("税込[0-9]*円", price).group(0))
            oniDict[title][name] = {"tax-exclude":taxEx, "tax-include":taxIn}

    #json書き出し
    write("seven_onigiri.json", oniDict)

def get_soup(url):
    r = requests.get(url)
    r.encoding = r.apparent_encoding #文字化け対策
    if r.status_code == 200:
        html = r.text
        return BeautifulSoup(html, "html.parser")
    sys.stderr.write("不正なリクエスト")
    sys.exit()

def write(filename, mydict):
    f = open(filename, "w")
    jsonStr = json.dump(mydict, f, ensure_ascii=False, indent=4, separators=(',', ': '))

#main関数実行
if __name__ == "__main__":
    main()
