var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About","tags":"misc"},{"text":"各零件尺寸加工工作圖 本體加工工作圖-1 本體加工工作圖-2 各零件3D圖 腳步機構零件系統圖 平面組合圖 立體組合圖 完整機構行走模擬動畫","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-wu-zhou-zuo-ye.html","title":"協同產品設計實習 第十五週作業","tags":"HW"},{"text":"繪製2D 正齒輪(17t-11t-13t-14t) window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=17, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear1'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 y1=(canvas.height)/1.435 r = 0.8*(canvas.height/2) # 齒數 n17 = 17 n11 = 11 n13 = 13 n14 = 14 canvas_size = canvas.height*0.4 r17 = canvas_size*n17/(n17+n11+n13+n14) r11 = canvas_size*n11/(n17+n11+n13+n14) r13 = canvas_size*n13/(n17+n11+n13+n14) r14 = canvas_size*n14/(n17+n11+n13+n14) x17 = x-5 - r17 x11 = x-5 + r11 x13 = x-5+ 2*r11 + r13 x14 = x-5+ 2*r11 + r13 y17 = y y11 = y y13 = y y14 = y1 # 壓力角 pa = 20 gear17 = Spur(ctx).Gear(x17, y17, r17, n17, pa, \"blue\") gear11 = Spur(ctx).Gear(x11, y11, r11, n11, pa, \"red\") gear13 = Spur(ctx).Gear(x13, y13, r13, n13, pa, \"blue\") gear14 = Spur(ctx).Gear(x14, y14, r14, n14, pa, \"red\") div = doc[\"onegear_div\"]","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-san-zhou-zuo-ye.html","title":"協同產品設計實習 第十三週作業","tags":"HW"},{"text":"畫漸開線正齒輪輪廓 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=17, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/4 y = (canvas.height)/4 r = 0.8*(canvas.height/4) # 齒數 n = 17 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=17, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear1'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n17 = 17 n11 = 11 n13 = 13 canvas_size = canvas.height*0.4 r17 = canvas_size*n17/(n17+n11+n13) r11 = canvas_size*n11/(n17+n11+n13) r13 = canvas_size*n13/(n17+n11+n13) x17 = x-5 - r17 x11 = x-5 + r11 x13 = x-5+ 2*r11 + r13 y17 = y y11 = y y13 = y # 壓力角 pa = 20 gear17 = Spur(ctx).Gear(x17, y17, r17, n17, pa, \"blue\") gear11 = Spur(ctx).Gear(x11, y11, r11, n11, pa, \"red\") gear13 = Spur(ctx).Gear(x13, y13, r13, n13, pa, \"blue\") div = doc[\"onegear_div\"] 網際正齒輪組傳動繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } Set Number of Gears from browser import document as doc from browser import html import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear2'] ctx = canvas.getContext(\"2d\") # 以 button 驅動的事件函式 def setgearnumber(e): ctx.clearRect(0, 0, canvas.width, canvas.height) x = (canvas.width)/2 y = (canvas.height)/2 if doc[\"n1\"].value.isdigit(): n17 = int(doc[\"n1\"].value) else: n17 = 17 if doc[\"n2\"].value.isdigit(): n11 = int(doc[\"n2\"].value) else: n11 = 11 if doc[\"n3\"].value.isdigit(): n13 = int(doc[\"n3\"].value) else: n13 = 13 # 只使用畫布高度的 80% canvas_size = canvas.height*0.4 r17 = canvas_size*n17/(n17+n11+n13) r11 = canvas_size*n11/(n17+n11+n13) r13 = canvas_size*n13/(n17+n11+n13) # 計算各齒輪中心座標 x17 = x - r17-r11 y17 = y x11 = x y11 = y x13 = x + r11+r13 y13 = y pa = 20 # 開始繪製齒輪 # 儲存原有的座標系統 ctx.save() # 平移到齒輪圓心 ctx.translate(x17, y17) # 以齒輪圓心旋轉 90 度, 讓紅色標線在齒輪右側保持水平 ctx.rotate(90*deg) # 平移回原來的座標原點 ctx.translate(-x17, -y17) gear17 = Spur(ctx).Gear(x17, y17, r17, n17, pa, \"blue\") # 回復原有的座標系統 ctx.restore() ctx.save() ctx.translate(x11, y11) # 中間齒輪轉動 -90 度加上一齒, 可以與左側齒輪囓合 ctx.rotate(-90*deg-math.pi/n11) ctx.translate(-x11, -y11) gear11 = Spur(ctx).Gear(x11, y11, r11, n11, pa, \"blue\") ctx.restore() ctx.save() ctx.translate(x13, y13) # 右側齒輪轉動 -90 度加上一齒, 可以與原來標線在左側水平的中間齒輪囓合, 但是目前中間齒輪的標線已經轉了 180 度加或減一次 # 必須配合兩齒的速比轉換旋轉角, 以便讓中間齒輪與右側齒輪囓合 ctx.rotate(-90*deg-math.pi/n13+(180*deg+math.pi/n11)*n11/n13) ctx.translate(-x13, -y13) gear13 = Spur(ctx).Gear(x13, y13, r13, n13, pa, \"blue\") ctx.restore() setgearnumber(True) ''' div = doc[\"onegear2_div\"] form = html.FORM() input1 = html.INPUT(type=\"text\", id=\"n1\", name=\"n1\", value=\"13\") input2 = html.INPUT(type=\"text\", id=\"n2\", name=\"n2\", value=\"11\") input3 = html.INPUT(type=\"text\", id=\"n3\", name=\"n3\", value=\"19\") div <= input1 + html.BR() + input2 + html.BR() + input3 ''' doc['button'].bind('click',setgearnumber) 模擬 2D 正齒輪組囓合 # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 #cobj = window.Cobj.new shape = window.Shape.new path = window.Path.new creategeartooth = window.createGearTooth.new tweener = window.Tweener.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 11 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.4*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = shape(data, { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = path(shapedefs.circle(hr)) shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path # setup the animation # backlash (mm) bklsh = 0.04*m # centre shift to make backlash dC = bklsh/(3*math.tan(math.pi*pa/180)) # np 為小齒輪齒數 np = 13 # gear ratio gr = n/np gearConfig = {'cx':-pr, 'cy':0, 'degs':[0, 360]} # gr*0.666 rpm #pinionConfig = {'cx':pr+dC, 'cy':0, 'degs':[0, -gr*360]} # 0.666 rpm twnr = tweener(0, 90000, \"loop\") cx = canvas.width/2 cy = canvas.height/2 #gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 #cgo.render(gear) #cgo.render(gear2) #cgo.render(gear3) # 利用 gear 資料複製一份, 命名為 gear gear1 = gear.dup() gear2 = gear1.dup() gear3 = gear1.dup() from time import time from browser.timer import request_animation_frame as raf from browser.timer import set_interval deg = math.pi/180 def draw(): cgo.clearCanvas() gear.rotate(2*deg) # 在特定位置, 以特定 scale, 特定 degs 執行 render cgo.render(gear, {'x':cx-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear1.rotate(-2*deg) cgo.render(gear1, {'x':cx+pr*2*0.5-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear2.rotate(2*deg) cgo.render(gear2, {'x':cx+pr*2*0.5*2-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear3.rotate(-2*deg) cgo.render(gear3, {'x':cx+pr*2*0.5*2-pr/2, 'y':1.43*cy, 'scl':0.5, 'degs':147}) set_interval(draw, 2)","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-er-zhou-zuo-ye.html","title":"協同產品設計實習 第十二週作業","tags":"HW"},{"text":"2D 靜態網際繪圖 window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=17, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/4 y = (canvas.height)/4 r = 0.8*(canvas.height/4) # 齒數 n = 17 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\") 3D 減速齒輪組動態模擬 # 將 導入的 document 設為 doc 主要原因在於與舊程式碼相容 from browser import document as doc # 由於 Python3 與 Javascript 程式碼已經不再混用, 因此來自 Javascript 的變數, 必須居中透過 window 物件轉換 from browser import window import math # 主要用來取得畫布大小 canvas = doc[\"cango_gear\"] # 此程式採用 Cango Javascript 程式庫繪圖, 因此無需 ctx ctx = canvas.getContext(\"2d\") cango = window.Cango.new # 針對變數的轉換, shapeDefs 在 Cango 中資料型別為變數, 可以透過 window 轉換 shapedefs = window.shapeDefs # 目前 Cango 結合 Animation 在 Brython 尚無法運作, 此刻只能繪製靜態圖形 # in CangoAnimation.js #interpolate1 = window.interpolate # Cobi 與 createGearTooth 都是 Cango Javascript 程式庫中的物件 #cobj = window.Cobj.new shape = window.Shape.new path = window.Path.new creategeartooth = window.createGearTooth.new tweener = window.Tweener.new # 經由 Cango 轉換成 Brython 的 cango, 指定將圖畫在 id=\"cango_gear\" 的 canvas 上 cgo = cango(\"cango_gear\") ###################################### # 畫正齒輪輪廓 ##################################### # n 為齒數 n = 11 # pa 為壓力角 pa = 25 # m 為模數, 根據畫布的寬度, 計算適合的模數大小 # Module = mm of pitch diameter per tooth m = 0.4*canvas.width/n # pr 為節圓半徑 pr = n*m/2 # gear Pitch radius # generate gear data = creategeartooth(m, n, pa) # Brython 程式中的 print 會將資料印在 Browser 的 console 區 #print(data) gearTooth = shape(data, { \"fillColor\":\"#ddd0dd\", \"border\": True, \"strokeColor\": \"#606060\" }) gearTooth.rotate(180/n) # rotate gear 1/2 tooth to mesh # 單齒的齒形資料經過旋轉後, 將資料複製到 gear 物件中 gear = gearTooth.dup() # gear 為單一齒的輪廓資料 #cgo.render(gearTooth) # 利用單齒輪廓旋轉, 產生整個正齒輪外形 for i in range(1, n): # 將 gearTooth 中的資料複製到 newTooth newTooth = gearTooth.dup() # 配合迴圈, newTooth 的齒形資料進行旋轉, 然後利用 appendPath 方法, 將資料併入 gear newTooth.rotate(360*i/n) # appendPath 為 Cango 程式庫中的方法, 第二個變數為 True, 表示要刪除最前頭的 Move to SVG Path 標註符號 gear.appendPath(newTooth, True) # trim move command = True # 建立軸孔 # add axle hole, hr 為 hole radius hr = 0.6*pr # diameter of gear shaft shaft = path(shapedefs.circle(hr)) shaft.revWinding() gear.appendPath(shaft) # retain the 'moveTo' command for shaft sub path # setup the animation # backlash (mm) bklsh = 0.04*m # centre shift to make backlash dC = bklsh/(3*math.tan(math.pi*pa/180)) # np 為小齒輪齒數 np = 13 # gear ratio gr = n/np gearConfig = {'cx':-pr, 'cy':0, 'degs':[0, 360]} # gr*0.666 rpm #pinionConfig = {'cx':pr+dC, 'cy':0, 'degs':[0, -gr*360]} # 0.666 rpm twnr = tweener(0, 90000, \"loop\") cx = canvas.width/2 cy = canvas.height/2 #gear.translate(cx, cy) # render 繪出靜態正齒輪輪廓 #cgo.render(gear) #cgo.render(gear2) # 利用 gear 資料複製一份, 命名為 gear gear1 = gear.dup() gear2 = gear1.dup() from time import time from browser.timer import request_animation_frame as raf from browser.timer import set_interval deg = math.pi/180 def draw(): cgo.clearCanvas() gear.rotate(2*deg) # 在特定位置, 以特定 scale, 特定 degs 執行 render cgo.render(gear, {'x':cx-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear1.rotate(-2*deg) cgo.render(gear1, {'x':cx+pr*2*0.5-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) gear2.rotate(2*deg) cgo.render(gear2, {'x':cx+pr*2*0.5*2-pr/2, 'y':cy, 'scl':0.5, 'degs':0}) set_interval(draw, 2)","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-yi-zhou-zuo-ye.html","title":"協同產品設計實習 第十一週作業","tags":"HW"},{"text":"1.brython window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc from browser import html import math container = doc['container'] degree = math.pi/180 def button1(event): a = input(\"give me a\") container <= str(math.cos(60*degree)+float(a)) doc[\"button1\"].bind(\"click\", button1) 按下取 a 值","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-shi-zhou-zuo-ye.html","title":"協同產品設計實習 第十週作業","tags":"HW"},{"text":"Fourbar Walker OnShape 零件協同繪圖與組立查驗 Solvespace行走機構 影片 Onshape行走機構","url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-zhong-fourbar-walker-onshape-ling-jian-xie-tong-hui-tu-yu-zu-li-cha-yan.html","title":"協同產品設計實習 期中Fourbar Walker OnShape 零件協同繪圖與組立查驗","tags":"HW"},{"text":"四連桿機構協同 Trace Point 查驗 Trace Point 查驗 影片 軌跡圖 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/Trace Point.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 6 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() solvespace Excel","url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-zhong-si-lian-gan-ji-gou-xie-tong-trace-point-cha-yan.html","title":"協同產品設計實習 期中四連桿機構協同 Trace Point 查驗","tags":"HW"},{"text":"利用solvespace畫單連桿 單連桿 作業心得 翻譯的影片的發音有點難理解，經過反覆聽才比較理解。","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-si-zhou-zuo-ye.html","title":"協同產品設計實習 第四週作業","tags":"HW"},{"text":"利用Onshape畫四連桿 四連桿機構 零件1 四連桿機構 零件2 四連桿機構 零件3 四連桿機構 組裝 hyperworks2中英字幕 作業心得 翻譯的影片的發音有點難理解，經過反覆聽才比較理解。","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-san-zhou-zuo-ye.html","title":"協同產品設計實習 第三週作業","tags":"HW"},{"text":"利用solvespace畫四連桿 四連桿 IP修改 作業心得 這週老師教了繪製四連桿機構，和改ip位置。","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-er-zhou-zuo-ye.html","title":"協同產品設計實習 第二週作業","tags":"HW"}]};