import json

class Amazon():

    def parse(self, inpath, outpath):
     with open(inpath, 'r', encoding="utf-8") as original:
        with open(outpath, 'w') as fout:
            for l in original:
                arr = ['/', '\\', '[', ']', '$']
                x = 0
                while x < 5:
                    if arr[x] in l:
                        l = l.replace(arr[x], "")
                        print(arr[x])
                        x += 1
                    else:
                        x += 1

                json.dump(l, fout)
 #               fout.write(json.dumps(l, skipkeys=False, ensure_ascii=True, indent=4))
                
amazon = Amazon()
amazon.parse("victims.json", "victims-cleaned.json")


