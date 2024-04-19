"use strict";(self.webpackChunkdevyuseon_github_io=self.webpackChunkdevyuseon_github_io||[]).push([[232],{1138:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=s(7624),i=s(4552);const r={title:"\ud1b5\ud569 \uc811\uadfc \uc81c\uc5b4 \uc804\ub7b5\uc744 \uc124\uacc4 \ud574\ubcf4\ub2e4.",description:"\ud769\uc5b4\uc838 \ud558\ub4dc\ucf54\ub529\ub418\uc5b4 \uc788\ub294 \uad8c\ud55c \uad00\ub9ac\ub97c \ud558\ub098\ub85c \ud1b5\ud569\ud558\ub294 \uc124\uacc4\ub97c \uc9c4\ud589\ud574 \ubcf4\uc558\ub2e4.",tags:["design"],hide_table_of_contents:!1,toc_max_heading_level:4},c=void 0,d={permalink:"/blog/2024/03/11/design-access-control-strategy",source:"@site/blog/2024-03-11-design-access-control-strategy.md",title:"\ud1b5\ud569 \uc811\uadfc \uc81c\uc5b4 \uc804\ub7b5\uc744 \uc124\uacc4 \ud574\ubcf4\ub2e4.",description:"\ud769\uc5b4\uc838 \ud558\ub4dc\ucf54\ub529\ub418\uc5b4 \uc788\ub294 \uad8c\ud55c \uad00\ub9ac\ub97c \ud558\ub098\ub85c \ud1b5\ud569\ud558\ub294 \uc124\uacc4\ub97c \uc9c4\ud589\ud574 \ubcf4\uc558\ub2e4.",date:"2024-03-11T00:00:00.000Z",formattedDate:"March 11, 2024",tags:[{label:"design",permalink:"/blog/tags/design"}],readingTime:17.375,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\ud1b5\ud569 \uc811\uadfc \uc81c\uc5b4 \uc804\ub7b5\uc744 \uc124\uacc4 \ud574\ubcf4\ub2e4.",description:"\ud769\uc5b4\uc838 \ud558\ub4dc\ucf54\ub529\ub418\uc5b4 \uc788\ub294 \uad8c\ud55c \uad00\ub9ac\ub97c \ud558\ub098\ub85c \ud1b5\ud569\ud558\ub294 \uc124\uacc4\ub97c \uc9c4\ud589\ud574 \ubcf4\uc558\ub2e4.",tags:["design"],hide_table_of_contents:!1,toc_max_heading_level:4},unlisted:!1,prevItem:{title:"Spring REST Docs + OAS \uc801\uc6a9\uae30",permalink:"/blog/2024/03/30/springrestdocs-openapi3"},nextItem:{title:"2023 \ud68c\uace0",permalink:"/blog/2024/02/13/2023-retrospect"}},t={authorsImageUrls:[]},o=[{value:"Intro",id:"intro",level:2},{value:"\uace0\ub824\ud574\uc57c \ud560 \uc694\uc18c",id:"\uace0\ub824\ud574\uc57c-\ud560-\uc694\uc18c",level:2},{value:"\uc804\ub7b5\uc758 \uc120\ud0dd",id:"\uc804\ub7b5\uc758-\uc120\ud0dd",level:2},{value:"Role Based Access Control, \uc5ed\ud560 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4",id:"role-based-access-control-\uc5ed\ud560-\uae30\ubc18-\uc811\uadfc-\uc81c\uc5b4",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5",level:4},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:4},{value:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\ub294 ...",id:"\uc6b0\ub9ac-\uc11c\ube44\uc2a4\uc5d0\ub294-",level:4},{value:"Attribute Based Access Control, \uc18d\uc131 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4",id:"attribute-based-access-control-\uc18d\uc131-\uae30\ubc18-\uc811\uadfc-\uc81c\uc5b4",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5-1",level:4},{value:"\uc7a5\uc810",id:"\uc7a5\uc810-1",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810-1",level:4},{value:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\ub294 ...",id:"\uc6b0\ub9ac-\uc11c\ube44\uc2a4\uc5d0\ub294--1",level:4},{value:"Resource Based Access Control, \ub9ac\uc18c\uc2a4 \uae30\ubc18 \uc81c\uc5b4 (\ub0b4\ub9d8\ub300\ub85c \uba85\uce6d)",id:"resource-based-access-control-\ub9ac\uc18c\uc2a4-\uae30\ubc18-\uc81c\uc5b4-\ub0b4\ub9d8\ub300\ub85c-\uba85\uce6d",level:3},{value:"\ud2b9\uc9d5",id:"\ud2b9\uc9d5-2",level:4},{value:"\uc7a5\uc810",id:"\uc7a5\uc810-2",level:4},{value:"\ub2e8\uc810",id:"\ub2e8\uc810-2",level:4},{value:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\ub294 ...",id:"\uc6b0\ub9ac-\uc11c\ube44\uc2a4\uc5d0\ub294--2",level:4},{value:"\ub290\ub080\uc810",id:"\ub290\ub080\uc810",level:2}];function h(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"intro",children:"Intro"}),"\n",(0,l.jsxs)(e.p,{children:["\ud68c\uc0ac\uc5d0\uc11c \ub0b4\uac00 \ub9e1\uc740 \uc11c\ube44\uc2a4\uc758 ",(0,l.jsx)(e.strong,{children:"\uad8c\ud55c \uad00\ub9ac"}),"\ub294 \uc5ec\ub7ec \uacf3\uc5d0 \ud769\uc5b4\uc838 \ud558\ub4dc\ucf54\ub529 \ub418\uc5b4 \uc788\ub2e4. \uc5ec\uae30\uc11c \uad8c\ud55c \uad00\ub9ac\ub780 \uc5b4\ub5a4 \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc811\uadfc \uad8c\ud55c\uc744 \ub9d0\ud55c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:"\uc774\ub54c \uace0\ub824\ub418\ub294 \uc694\uc18c\ub3c4 \ub2e4\uc591\ud558\ub2e4. \uadf8\ub7f0\ub370 \uc774\ubc88\uc5d0 \uc0c8 \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uc5b4 \ub354\uc6b1 \ub354 \ubcf5\uc7a1\ud558\uac8c \uad00\ub9ac\ud574\uc57c \ud560 \uc0c1\ud669\uc774 \uc0dd\uacbc\ub2e4. REST API\ub3c4 \uc81c\uacf5\ud558\uac8c \ub418\uc5c8\ub2e4. \uc774\uc5d0 \uad8c\ud55c \uad00\ub9ac\ub97c \ud55c\uacf3\uc5d0\uc11c \ud1b5\ud569\ud574\uc57c \ud560 \ud544\uc694\uac00 \uc0dd\uacbc\uace0, \uc774 \uc784\ubb34\uac00 \ub098\uc5d0\uac8c(!!) \ub9e1\uaca8\uc84c\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uadf8\ub798\uc11c \uc124\uacc4\ub97c \ud574\ubcf4\uba70 \uace0\ub824\ud55c \uc694\uc18c\ub4e4\uacfc, \uc774 \uacfc\uc815\uc5d0\uc11c \ub290\ub080\uc810\uc744 \uc815\ub9ac\ud574 \ubcf4\ub824\uace0 \ud55c\ub2e4."}),"\n",(0,l.jsxs)(e.admonition,{type:"warning",children:[(0,l.jsxs)(e.p,{children:["\uc870\uae08\uc774\ub77c\ub3c4 \ubbfc\uac10\ud560 \uc218 \uc788\ub294 \ud68c\uc0ac \ub0b4\uc6a9\uc744 \ubaa8\ub450 \uc81c\uc678\ud558\uc600\uae30 \ub54c\ubb38\uc5d0, ",(0,l.jsx)(e.strong,{children:"\uc559\uaf2c\uc5c6\ub294 \ucc10\ube75"}),"\uac19\uc740 \uae00\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"ROLE_"})," \ud615\uc2dd\uc758 \uad8c\ud55c \uc124\uacc4\uac00 \uc544\ub2cc, \ub2e4\ub978 \uc124\uacc4\ub97c \uacc4\ud68d\ud560 \ub54c \uc870\uae08\uc774\ub77c\ub3c4 \uc778\uc0ac\uc774\ud2b8\uac00 \ub41c\ub2e4\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4. \u263a\ufe0f"]})]}),"\n",(0,l.jsx)(e.h2,{id:"\uace0\ub824\ud574\uc57c-\ud560-\uc694\uc18c",children:"\uace0\ub824\ud574\uc57c \ud560 \uc694\uc18c"}),"\n",(0,l.jsx)(e.p,{children:"\uc0ac\ub0b4 \uc11c\ube44\uc2a4\ub294 \ub9dd \ubd84\ub9ac\uac00 \ub418\uc5b4 \uc788\ub2e4. \uadf8\ub798\uc11c \uc0ac\ub0b4\uc9c1\uc6d0 / \uc678\ubd80\uc720\uc800\uac00 \ub85c\uadf8\uc778 \ubc29\uc2dd\uc774 \ub2e4\ub974\uace0, \uc811\uadfc\ud558\ub294 \ub3c4\uba54\uc778\ub3c4 \ub2e4\ub974\ub2e4. \uc0ac\ub0b4\uc9c1\uc6d0\uc77c \uacbd\uc6b0 \ubd80\uc11c\ubcc4\ub85c \uc5b4\ub5a4 \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc811\uadfc \uad8c\ud55c\uc774 \ub2e4\ub974\ub2e4. \ud2b9\uc815 \ubd80\uc11c\uac00 \uc0dd\uc131\ud55c \uac83\uc740 \uadf8 \ubd80\uc11c\ub9cc \uc218\uc815\ud560 \uc218 \uc788\ub2e4\ub358\uac00 \ud558\ub294 \ucc98\ub9ac\uac00 \ud544\uc694\ud558\ub2e4. \uc678\ubd80\uc720\uc800\uc77c \uacbd\uc6b0 \uac19\uc740 \ud68c\uc0ac\ub9cc \uc5f4\ub78c\ud560 \uc218 \uc788\uc5c8\ub2e4. \uc774\uac78 \ubaa8\ub450 \ud558\ub4dc\ucf54\ub529 \ud558\uace0 \uc788\uc5c8\ub2e4. (if ~ else\ub85c.)"}),"\n",(0,l.jsx)(e.p,{children:"\ub610, \uc77c\ubc18\uc801\uc778 \uc6f9 \ubc31\uc5d4\ub4dc API \ub9d0\uace0\ub3c4 REST API \ub85c\uc758 \uc811\uadfc\ub3c4 \uc81c\uacf5\ud558\uac8c \ub418\uc5c8\ub2e4. \uc774\ub54c Token\uc744 \ubc1c\uae09\ubc1b\uc740 \uc720\uc800\ub9cc \ud574\ub2f9 API \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc774\ub7f0 \uc694\uc18c\ub4e4\uc744 \uace0\ubbfc\ud574\uc57c \ud588\ub2e4. \uc815\ub9ac\ud558\uba74 \uc544\ub798\uc640 \uac19\ub2e4."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc0ac\ub0b4\uc9c1\uc6d0 (Jira API \uc5d0\uc11c \ub85c\uadf8\uc778 \uc815\ubcf4\ub97c \uac00\uc838\uc634) / \uc678\ubd80\uc720\uc800 (\ud68c\uc6d0 \uad00\ub9ac DB\uac00 \ub530\ub85c \uc788\uc74c)"}),"\n",(0,l.jsx)(e.li,{children:"\uc0ac\ub0b4\uc9c1\uc6d0 \uc77c \uacbd\uc6b0 \ubd80\uc11c \uc815\ubcf4\uc5d0 \ub530\ub77c \uc811\uadfc \uad8c\ud55c\uc744 \uad6c\ubd84\ud574\uc57c \ud568"}),"\n",(0,l.jsx)(e.li,{children:"\uc678\ubd80\uc720\uc800\uc77c \uacbd\uc6b0 \ud68c\uc0ac \uc815\ubcf4\uc5d0 \ub530\ub77c \uc811\uadfc \uad8c\ud55c\uc744 \uad6c\ubd84\ud574\uc57c \ud568"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\uc9c0\uae08\uae4c\uc9c0 \ubd80\uc11c\ubcc4 \uad8c\ud55c\uc744 \ub098\ub204\ub294 \uc77c\uc740 \uc5c6\uc5c8\uc73c\ub098, \uc774\ubc88\uc5d0 \ucd94\uac00\ub418\uc5c8\ub2e4. Jira API\ub294 \ubd80\uc11c \uc815\ubcf4\ub97c \ud55c\uae00\ub85c \ub41c String\uc73c\ub85c \ubc18\ud658\ud588\ub2e4. \ub9cc\uc57d \uc870\uc9c1 \uac1c\ud3b8\uc774 \uc774\ub8e8\uc5b4\uc9c8 \uacbd\uc6b0 ",(0,l.jsx)(e.strong,{children:"\ub9c8\uc774\uadf8\ub808\uc774\uc158"})," \ub3c4 \uace0\ub824\ud574\uc57c \ud588\ub2e4."]}),"\n",(0,l.jsx)(e.h2,{id:"\uc804\ub7b5\uc758-\uc120\ud0dd",children:"\uc804\ub7b5\uc758 \uc120\ud0dd"}),"\n",(0,l.jsx)(e.p,{children:"\ubcf4\ud1b5 \uad8c\ud55c\uad00\ub9ac \uc2dc\uc5d0 Spring\uc73c\ub85c \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uba74 Spring Security\ub85c Role\uc744 \ubd80\uc5ec\ud558\uc5ec \ud558\uace4 \ud55c\ub2e4. \ud558\uc9c0\ub9cc \ub098\uc758 \uacbd\uc6b0 \uad8c\ud55c \uad00\ub9ac\uac00 \uc774\ub8e8\uc5b4 \uc9c0\ub294 \uacf3\uc740 Express \uc600\uace0, \ud68c\uc6d0 \uad00\ub828 \uc815\ubcf4\uac00 \uc6b0\ub9ac DB\uc5d0 \uc788\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc678\ubd80\ub85c\ubd80\ud130 \uac00\uc838\uc624\ub294 \uc815\ubcf4\uc774\uae30 \ub54c\ubb38\uc5d0 \ud754\ud558\uac8c \uc801\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uc27d\uac8c \uc4f8 \uc218 \uc5c6\uc5c8\ub2e4."}),"\n",(0,l.jsxs)(e.p,{children:["\uad8c\ud55c\uad00\ub9ac\ub97c \uc124\uacc4\ud560 \ub54c \uc5b4\ub5a4 \uc804\ub7b5\uc744 \ucde8\ud558\ub294\uc9c0 \uc870\uc0ac\ub97c \ud574 \ubcf4\uc558\ub2e4. ",(0,l.jsx)(e.code,{children:"Role Based Access Control (\uc5ed\ud560 \uae30\ubc18 \uc81c\uc5b4)"})," \uc640 ",(0,l.jsx)(e.code,{children:"Attribute Based Access Control (\uc18d\uc131 \uae30\ubc18 \uc81c\uc5b4)"})," \uac00 \uac00\uc7a5 \ub9ce\uc774 \ucde8\ud558\ub294 \uc804\ub7b5\uc774\uc600\ub2e4."]}),"\n",(0,l.jsxs)(e.p,{children:["\uc774 \ub450 \uc804\ub7b5\uc744 \uc911\uc2ec\uc73c\ub85c \uc124\uacc4\ub97c \ud588\ub294\ub370, \ub9ac\ubdf0 \uc2dc\uac04\uc5d0 PL\ubd84\uaed8\uc11c \uc778\uc0ac\uc774\ud2b8\ub97c \uc81c\uacf5\ud574 \uc8fc\uc154\uc11c(!) \ud574\ub2f9 \ub9ac\uc18c\uc2a4\ubcc4\ub85c \uad8c\ud55c\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\uc2dd, \ub0b4\ub9d8\ub300\ub85c ",(0,l.jsx)(e.code,{children:"Resource Based Access Control (\ub9ac\uc18c\uc2a4 \uae30\ubc18 \uc81c\uc5b4)"})," \ub77c \uc774\ub984\uc744 \uc9d3\uace0, \uc774 \uc804\ub7b5\ub3c4 \ucd94\uac00\ub85c \uc124\uacc4\ud588\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:"\uc544, \ucd94\uac00\ub85c \uad8c\ud55c\uc744 \uad00\ub9ac\ud560 \uc218 \uc788\ub294 \uc624\ud508\uc18c\uc2a4\ub4e4 (OPA \ub4f1 ...) \uc774 \uc788\uae34 \ud588\ub294\ub370, \uac1c\ubc1c\uc790\uac00 \ub098 \ud63c\uc790\ub77c \uc11c\ube44\uc2a4\ub97c \ud558\ub098 \ub354 \ucd94\uac00\ud574 \uad00\ub9ac\ud558\ub294\uac83\uc774 \ubd80\ub2f4\uc2a4\ub7fd\uace0 \uadf8\ub807\uac8c \ud070 \uc2dc\uc2a4\ud15c\ub3c4 \uc544\ub2c8\ub77c\uc11c \uc774\uac74 \uc81c\uc678\ud588\ub2e4."}),"\n",(0,l.jsx)(e.h3,{id:"role-based-access-control-\uc5ed\ud560-\uae30\ubc18-\uc811\uadfc-\uc81c\uc5b4",children:"Role Based Access Control, \uc5ed\ud560 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4"}),"\n",(0,l.jsx)(e.h4,{id:"\ud2b9\uc9d5",children:"\ud2b9\uc9d5"}),"\n",(0,l.jsx)(e.p,{children:"\uc5ed\ud560\uc5d0 \ub530\ub77c \uc2dc\uc2a4\ud15c, \ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc0ac\uc6a9\uc790 \uc811\uadfc \uad8c\ud55c\uc744 \uad00\ub9ac\ud558\ub294 \ubc29\ubc95\uc774\ub2e4. \uac01 \uac1c\ubcc4 \uc0ac\uc6a9\uc790\uc5d0 \ub300\ud574 \uc5ed\ud560\uc744 \ubd80\uc5ec\ud558\uace0, \uc5b4\ub5a4 \uae30\ub2a5\uc5d0 \ub300\ud574 \ud5c8\uc6a9\ud560 \uc5ed\ud560\uc744 \ub098\uc5f4\ud574 \uc81c\uc5b4\ud55c\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc5ed\ud560 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4\ub294 \ub2e4\uc74c \ud2b9\uc9d5\uc744 \uac00\uc9c4\ub2e4."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uac01 \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \uc5ed\ud560\uc774 \ud560\ub2f9\ub41c\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\uc0ac\uc6a9\uc790 \uc5ed\ud560\uc5d0\ub294 \uad8c\ud55c\uc774 \ud560\ub2f9\ub41c\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\uc0ac\uc6a9\uc790\uac00 \uc5ed\ud560\uc744 \ud65c\uc131 \uad6c\uc131\uc6d0\uc774 \ub418\uba74 \uad8c\ud55c\uc5d0 \uc561\uc138\uc2a4 \ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\uc608\ub97c\ub4e4\uc5b4, \uc5b4\ub5a4 \uc0c1\ud488\uc744 \ud310\ub9e4\ud558\ub294 \ud398\uc774\uc9c0\ub77c\uba74, ",(0,l.jsx)(e.code,{children:"ROLE_ADMIN"}),", ",(0,l.jsx)(e.code,{children:"ROLE_SELLER"}),", ",(0,l.jsx)(e.code,{children:"ROLE_USER"}),"\uc640 \uac19\uc740 \uc5ed\ud560\uc744 \uc815\uc758\ud558\uace0, \uadf8 \uc5ed\ud560\uc5d0 \ub530\ub77c \uc81c\uc5b4\ud558\uac8c \ub41c\ub2e4."]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc5ed\ud560 \uc815\uc758"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "name": "roles/testRole",\n  "title": "billing role",\n  "includedPermissions": ["paymentStatement.list", "usage.list"]\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\uc5ed\ud560 \ubd80\uc5ec"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "bindings": [\n    {\n      "role": "roles/testRole",\n      "members": ["user:viewrain@hohoho.com"]\n    }\n  ]\n}\n'})}),"\n",(0,l.jsx)(e.h4,{id:"\uc7a5\uc810",children:"\uc7a5\uc810"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uad8c\ud55c\uc5d0 \ub300\ud55c \ubd80\uc5ec, \ud68c\uc218\uac00 \uac04\ud3b8\ud558\ub2e4. \ud2b9\uc815 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\ub824\uba74 \uc5ed\ud560\uc744 \ubd80\uc5ec\ud558\uace0, \ube8f\uc73c\ub824\uba74 \uc5ed\ud560\uc744 \uc81c\uac70\ud558\uba74 \ub41c\ub2e4. \ub530\ub77c\uc11c \uc720\uc5f0\ud558\uace0 \uc9c1\uad00\uc801\uc778 \ud1b5\uc81c\uac00 \uac00\ub2a5\ud558\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\ub2e8\uc810",children:"\ub2e8\uc810"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc5ed\ud560\uc774 \ud3ed\ubc1c\uc801\uc73c\ub85c \ub298\uc5b4\ub0a0 \uc218 \uc788\ub2e4. \uc0c8 \uae30\ub2a5\uc774 \ucd94\uac00\ub418\uace0, \uadf8 \uae30\ub2a5\uc5d0\ub9cc \ud5c8\uc6a9\ub418\ub294 \uad8c\ud55c\uc774 \uc0dd\uae34\ub2e4\uba74 \uc0c8\ub85c \uc5ed\ud560\uc744 \uc815\uc758\ud558\uace0 \ubd80\uc5ec\ud55c\ub2e4. \uc774\ub7f0\uc2dd\uc73c\ub85c \ubc18\ubcf5\ud558\uba74 \uc11c\ube44\uc2a4\uac00 \ucee4\uc9c8\uc218\ub85d \uadf8 \uc5ed\ud560\ub3c4 \ud568\uaed8 \ub298\uc5b4\ub09c\ub2e4."}),"\n",(0,l.jsxs)(e.li,{children:["\uc138\ubc00\ud55c \uad8c\ud55c \uc815\ucc45\uc744 \ubd80\uc5ec\ud560 \uc218 \uc5c6\ub2e4.","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc5ec\ub7ec \uc0c1\ud669\uc744 \ucd94\uc0c1\ud654\ud574\uc11c \uc5ed\ud560\uc744 \ub9cc\ub4e4\uc9c0\ub9cc, \ub531 \ub9de\ub294 \uc5ed\ud560\uc744 \uc815\ud558\uae30\uac00 \ud798\ub4e4\ub2e4. \ud2b9\uc815 \uad8c\ud55c\uc5d0 \ub300\ud574 \ub9ce\uc740 \uace0\ub824\uc694\uc18c\uac00 \uc788\ub294 \uacbd\uc6b0, \ud558\ub098\ub9cc \uc694\uc18c\uac00 \ubc14\ub00c\uc5b4\ub3c4 \ub2e4\ub978 \uc5ed\ud560\uc744 \ubd80\uc5ec\ud574\uc57c \ud558\ub294\ub370 \uadf8\ub807\uac8c \ub108\ubb34 \uc791\uc740 \ub2e8\uc704\ub85c \uc5ed\ud560\uc744 \ub098\ub204\uba74 \uc790\uc8fc \ubcc0\uacbd\ud558\uac8c \ub420 \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\uc6b0\ub9ac-\uc11c\ube44\uc2a4\uc5d0\ub294-",children:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\ub294 ..."}),"\n",(0,l.jsx)(e.p,{children:"\uc801\uc6a9\ud558\uae30 \uc27d\uc9c0 \uc54a\uc558\ub2e4. \uc77c\ub2e8 \uc720\uc800\uc5d0 \ub300\ud55c DB \uc815\ubcf4\uac00 \uc6b0\ub9ac\ud55c\ud14c \uc788\ub294 \uac83\uc774 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0, '\ud68c\uc6d0\uac00\uc785' \uc774\ub77c\ub294 \uc808\ucc28\uac00 \uc5c6\uc5b4 \uc720\uc800 \uc815\ubcf4\ub97c \uae30\ubcf8\uc801\uc73c\ub85c \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\ub85c\uadf8\uc778 \ud55c \uc801 \uc5c6\ub294 \uc720\uc800\uac00 \ub85c\uadf8\uc778\ud558\uba74 \uc790\ub3d9\uc73c\ub85c \uc5ed\ud560\uc744 \ud310\ub2e8\ud574 \ubd80\uc5ec\ud55c\ub2e4\ub358\uac00 \ud558\ub294 \uc808\ucc28\uac00 \ud544\uc694\ud588\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uadf8\ub9ac\uace0, \ubd80\uc11c\ubcc4 \uc5ed\ud560 \uc815\uc758\ub3c4 \ud544\uc694\ud558\uace0, \ud68c\uc0ac\ubcc4 \uc5ed\ud560 \uc815\uc758\ub3c4 \ud544\uc694\ud588\ub2e4. \ub108\ubb34 \ub9ce\uc740 \uc5ed\ud560\uc758 \uc815\uc758\uac00 \ud544\uc694\ud588\uace0, \ubd80\uc5ec\ud558\uae30 \uc704\ud55c \ubcc4\ub3c4 \ub85c\uc9c1\uc774 \ud544\uc694\ud588\ub2e4. \uae4c\ub531\ud574\uc11c \uc798\ubabb \ud310\ub2e8\ud558\uba74 \ubd10\uc57c\ud558\ub294 \uc720\uc800\uac00 \ubabb\ubcf4\ub294 \uc815\ubcf4\uac00 \uc0dd\uae38 \uc218\ub3c4 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc774\ub807\uac8c \ub418\ub2c8 \ub354\uc6b1 \ubcf5\uc7a1\ud574\uc838\uc11c \uc774 \uc804\ub7b5\uc740 \ud0c8\ub77d\ud588\ub2e4."}),"\n",(0,l.jsx)(e.h3,{id:"attribute-based-access-control-\uc18d\uc131-\uae30\ubc18-\uc811\uadfc-\uc81c\uc5b4",children:"Attribute Based Access Control, \uc18d\uc131 \uae30\ubc18 \uc811\uadfc \uc81c\uc5b4"}),"\n",(0,l.jsx)(e.h4,{id:"\ud2b9\uc9d5-1",children:"\ud2b9\uc9d5"}),"\n",(0,l.jsx)(e.p,{children:"\uc8fc\uccb4, \uc790\uc6d0 \ub610\ub294 \ud658\uacbd\uc758 \uc18d\uc131\uc744 \uae30\ubc18\uc73c\ub85c \uc811\uadfc\uc744 \uc81c\uc5b4\ud558\ub294 \ubc29\uc2dd\uc774\ub2e4. \uc5b4\ub5a4 \uc0ac\ub78c\uc774 \ud2b9\uc815 \uac1d\uccb4\uc5d0 \uc811\uadfc\ud558\ub824 \ud560\ub54c \uac1d\uccb4\uc758 \uc18d\uc131, \uc0ac\ub78c\uc758 \uc18d\uc131, \uadf8\ub54c\uc758 \ud658\uacbd \uc815\ubcf4 \ub4f1\uc744 \ub2e4\uc591\ud558\uac8c \uace0\ub824\ud574\uc11c \ud310\ub2e8\ud55c\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uad00\uacc4\ub294 if ~ then \ubb38\uc73c\ub85c \uc815\uc758\ud55c\ub2e4. \uc608\ub97c\ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc9c1\uae09\uc774 '\uc8fc\uc784' \uc774\uc0c1\uc774\uace0, \uc811\uadfc\ud55c ip\uc8fc\uc18c\uac00 000.000.000.000/ \ub300\uc5ed\ub300 \uc774\uace0, \ud574\ub2f9 \uac8c\uc2dc\ubb3c\uc744 \uc791\uc131\ud55c \uc0ac\ub78c\uc774 \uac19\uc740\ud300 \uc77c\ub54c \uc561\uc138\uc2a4 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:'\ud68c\uc0ac \uc815\ucc45\uc5d0 "\ud1a0\uc694\uc77c \ud734\ubb34"\ub85c \uc9c0\uc815\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0, \ud1a0\uc694\uc77c\uc5d0\ub294 \ub204\uad6c\ub3c4 \ud30c\uc77c\uc5d0 \uc561\uc138\uc2a4\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc774\ub7f0 \uc815\ucc45\uc744 \ubaa8\ub450 if ~ then \ubb38\uc73c\ub85c \uc815\uc758\ud558\ub294 \uac83\uc774\ub2e4.'}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\ub098\ub294 '\uc815\ucc45' \uc744 \uc800\uc7a5\ud560 json array\ub97c \uc815\uc758\ud574 \ud558\ub098\uc758 object\uc5d0\ub294 \ub9ac\uc18c\uc2a4\uc758 \uc815\ubcf4\uc640, \uc811\uadfc\ud558\ub824\ub294 \uc720\uc800\uc758 \uc815\ubcf4, \ucd5c\uc885\uc801\uc73c\ub85c \uadf8\uac83\uc744 allow \ud560\uac74\uc9c0 deny \ud560\uac74\uc9c0 \uacb0\uc815\ud558\ub294 \uc815\ubcf4\ub97c \uc801\uc5b4\uc8fc\uc5c8\ub2e4. \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "id": "policy_1",\n    "description": "A \ubd80\uc11c\uac00 \ub9cc\ub4e0 \ud30c\uc77c\uc911 aa\ud0c0\uc785\uc758 \ud30c\uc77c\uc740 A \ubd80\uc11c\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",\n    "condition": {\n      "request": {\n        "access": "inner", // \uc0ac\ub0b4\uc9c1\uc6d0\n        "department": "A"\n      },\n      "resource": {\n        "department": "A",\n        "type": "aa"\n      }\n    },\n    "action": "allow"\n  }\n  // \uc0dd\ub7b5\n]\n'})}),"\n",(0,l.jsx)(e.p,{children:"\uc774\ub807\uac8c \ubaa8\ub4e0 \ucf00\uc774\uc2a4\ub97c \uad6c\ubd84\ud574 \ub098\uc5f4\ud574\uc8fc\ub294 \uac83\uc774\ub2e4."}),"\n",(0,l.jsx)(e.h4,{id:"\uc7a5\uc810-1",children:"\uc7a5\uc810"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uad49\uc7a5\ud788 \uc138\ubc00\ud55c \uc811\uadfc \uc81c\uc5b4\uac00 \uac00\ub2a5\ud558\ub2e4. \uac70\uc758 \ubaa8\ub4e0 \uacbd\uc6b0\uc758 \uc218\ub97c \ud1b5\uc81c\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\ub530\ub77c\uc11c \ud45c\ud604\uc131, \uc720\uc5f0\uc131\uc774 \ub9e4\uc6b0 \uc88b\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\ub2e8\uc810-1",children:"\ub2e8\uc810"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\uc2dc\uc2a4\ud15c \uaddc\ubaa8\uac00 \ucee4\uc9c0\uace0, \uad8c\ud55c\uc5d0 \ub300\ud55c \ucf00\uc774\uc2a4\uac00 \ub9ce\uc544\uc9c8\uc218\ub85d \uc131\ub2a5 \uc800\ud558\uac00 \uc62c \uc218 \uc788\ub2e4."}),"\n",(0,l.jsx)(e.li,{children:"\uc815\ucc45\uc744 \uc815\uc758\ud558\ub294 \ub370 \ub9ce\uc740 \uc2dc\uac04\uc774 \ud544\uc694\ud558\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"\uc6b0\ub9ac-\uc11c\ube44\uc2a4\uc5d0\ub294--1",children:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\ub294 ..."}),"\n",(0,l.jsx)(e.p,{children:"\ub9ac\uc18c\uc2a4\uc5d0 \ub300\ud55c \uc885\ub958\uac00 \ub2e4\uc591\ud574, \ub9ce\uc740 \ucf00\uc774\uc2a4\uc758 \uc815\uc758\uac00 \ud544\uc694\ud588\ub2e4. \uadf8\ub807\uac8c\ub418\uba74 \ub9e4\ubc88 \ubaa8\ub4e0 \uc815\ucc45\uc744 \ud6d1\uc5b4\ubd10\uc57c \ud588\ub2e4. \ubd80\uc11c\ub9cc \uba87\uc2ed\uac1c\uace0, \ud68c\uc0ac\ub294 \uba87\ucc9c\uac1c\uc600\uc5b4\uc11c \uadf8 \uc815\ucc45\uc744 \ub2e4 \ud55c\ubc88\uc529 \ubcf4\ub294 \uac83\uc740 \uc131\ub2a5\uc5d0 \ubb38\uc81c\uac00 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uadf8\ub9ac\uace0 \uac1c\ubc1c\uc790\uac00 \ub098\ubfd0\uc774\ub77c.. \uc774\uac78 \uc815\uc758\ud560 \uc0ac\ub78c\ub3c4 \ub098\uc600\uace0, \uc2e4\uc218\ud558\uac8c \ub418\uba74 \uce58\uba85\uc801\uc778 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uac83\uc774\uae30 \ub54c\ubb38\uc5d0 \uacb0\uad6d \uc774\uac83\ub3c4 \ud0c8\ub77d\ud588\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uadf8\ub9ac\uace0 \uc870\uc9c1 \uac1c\ud3b8\uc2dc \ub9c8\uc774\uadf8\ub808\uc774\uc158\ub3c4 \uc815\ucc45\uc744 \ubaa8\ub450 \uc0b4\ud3b4\ubcf4\uba70 String\uc744 \ucc3e\uace0 \ubc14\uafd4\uc918\uc57c \ud558\ub294\ub370, \uc815\ucc45\uc774 \ub9ce\uc73c\uba74 \ub9c8\uc774\uadf8\ub808\uc774\uc158 \ud560\ub54c \uc2e0\ub8b0\uc131\ub3c4 \ub5a8\uc5b4\uc9c0\uace0 \uc624\ub798\uac78\ub9ac\uae30 \ub54c\ubb38\uc5d0 \uc774\uac74 \ud0c8\ub77d\ud588\ub2e4."}),"\n",(0,l.jsx)(e.h3,{id:"resource-based-access-control-\ub9ac\uc18c\uc2a4-\uae30\ubc18-\uc81c\uc5b4-\ub0b4\ub9d8\ub300\ub85c-\uba85\uce6d",children:"Resource Based Access Control, \ub9ac\uc18c\uc2a4 \uae30\ubc18 \uc81c\uc5b4 (\ub0b4\ub9d8\ub300\ub85c \uba85\uce6d)"}),"\n",(0,l.jsx)(e.h4,{id:"\ud2b9\uc9d5-2",children:"\ud2b9\uc9d5"}),"\n",(0,l.jsx)(e.p,{children:"\ub9ac\uc18c\uc2a4\uc758 \uc720\ud615\uc744 \uc815\uc758\ud558\uace0, \uadf8\uac83\uc5d0 \ub300\ud574 \ud2b9\uc815 \uc720\uc800\ub97c \uac70\ubd80\ud560\uac74\uc9c0 \ud5c8\uc6a9\ud560\uac74\uc9c0 \uc124\uc815\ud574\uc8fc\ub294 \ubc29\uc2dd\uc774\ub2e4. \uc608\ub97c \ub4e4\uba74 \ub2e4\uc74c\uacfc \uac19\ub2e4. \ud68c\uc0ac \uc815\ubcf4\uac00 \uc544\ub2cc \ub2e4\ub978 \uc608\uc2dc\ub77c \uc870\uae08 \uc5c9\uc131\ud560\uc218\ub3c4 \uc788\ub2e4 .."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'[\n    "post": {\n        "a": {\n            "USER|kildong.hong": {\n                "allow": [\n                    "read"\n                ],\n                "deny": [\n                    "create",\n                    "update",\n                    "delete"\n                ]\n            },\n            "GROUP|\ud68c\uacc4\ud300": {\n                // \uc0dd\ub7b5\n            },\n            "ACCESS|\uc0ac\ub0b4\uc9c1\uc6d0": {\n                // \uc0dd\ub7b5\n            }\n        }\n    }\n]\n'})}),"\n",(0,l.jsx)(e.p,{children:"\uc774\ub807\uac8c \ub9ac\uc18c\uc2a4\uc758 \uc720\ud615\uc744 \uc815\uc758\ud558\uace0, \ud574\ub2f9 \ub9ac\uc18c\uc2a4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uc720\uc800\uc640 \uadf8 \uc720\uc800\uc5d0\uac8c \ud5c8\uc6a9\ub41c \ud589\uc704 \uc815\ubcf4\ub97c \uc801\uc5b4\uc900\ub2e4."}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"a\ud0c0\uc785 post\uc5d0 \ub300\ud574 \ud64d\uae38\ub3d9 \uc720\uc800\ub294 \uc870\ud68c \uac00\ub2a5\ud558\uace0, \ub4f1\ub85d \uc218\uc815 \uc0ad\uc81c\ub294 \ud560 \uc218 \uc5c6\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\uc640 \uac19\uc774 \ub9d0\uc774\ub2e4."}),"\n",(0,l.jsx)(e.h4,{id:"\uc7a5\uc810-2",children:"\uc7a5\uc810"}),"\n",(0,l.jsx)(e.p,{children:"\uc5bc\ud54f\ubcf4\uba74 ABAC\uc640 \ube44\uc2b7\ud558\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub294\ub370, \uc77c\ub2e8 \ub9ac\uc18c\uc2a4\uc758 \ud0c0\uc785\ubcc4\ub85c \ub098\ub204\uc5b4 \uc131\ub2a5\uc5d4 \uc870\uae08 \ub354 \uc774\uc810\uc774 \uc788\uc744 \uc218 \uc788\ub2e4. \uadf8\ub9ac\uace0 user, group, access\uc640 \uac19\uc774 prefix\ub97c \uc815\uc758\ud558\uace0 \uc124\uc815\ud574 \uc720\uc800\uc758 \ud0c0\uc785\uc744 \uad6c\ubd84\ud55c\ub2e4. \ud55c\ub208\uc5d0 \uc5b4\ub5a4 \uc720\uc800\uc778\uc9c0, \uc5b4\ub5a4 \ud0c0\uc785\uc758 \ub9ac\uc18c\uc2a4\uc778\uc9c0 \ud30c\uc545\uc774 \uac00\ub2a5\ud558\ub2e4. \ub098\uc911\uc5d0 \uc124\uc815\uc744 \uc218\uc815\ud558\ub294 \uc5b4\ub4dc\ubbfc \ud398\uc774\uc9c0\ub97c \uac1c\ubc1c\ud55c\ub2e4\uace0 \ud574\ub3c4 \uc774 \ud3b8\uc774 \ub354 \uad00\ub9ac\ud558\uae30 \uc26c\uc6b8 \uac83\uc774\ub77c \uc0dd\uac01\ud588\ub2e4."}),"\n",(0,l.jsx)(e.h4,{id:"\ub2e8\uc810-2",children:"\ub2e8\uc810"}),"\n",(0,l.jsx)(e.p,{children:"\uc774 \uacbd\uc6b0\uc5d0\ub3c4 \uc870\uc9c1\uac1c\ud3b8\uc2dc \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \ud558\ub824\uba74 \ubaa8\ub4e0 \uc815\ucc45\uc744 \ud55c\ubc88 \ub2e4 \ud6d1\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,l.jsx)(e.h4,{id:"\uc6b0\ub9ac-\uc11c\ube44\uc2a4\uc5d0\ub294--2",children:"\uc6b0\ub9ac \uc11c\ube44\uc2a4\uc5d0\ub294 ..."}),"\n",(0,l.jsx)(e.p,{children:"\uc704 \uc804\ub7b5\ub4e4\uc744 \ubaa8\ub450 \uc0b4\ud3b4\ubcf4\uc558\uc744 \ub54c, \ubcf5\uc7a1\ud55c \uc6b0\ub9ac \uc11c\ube44\uc2a4\uc758 \uc0c1\ud669\uc5d0 \uac00\uc7a5 \uc54c\ub9de\ub2e4\uace0 \uc0dd\uac01\ud588\ub2e4. \uc720\uc800\uc5d0 \ub300\ud55c DB\uc815\ubcf4\uac00 \ub514\ud3f4\ud2b8\ub85c \uc5c6\ub294 \ud658\uacbd\uc5d0\uc11c \uc720\uc800\uc758 \uc811\uc18d \uc815\ubcf4\uc640 \uc544\uc774\ub514 \ub4f1\ub9cc \ubcf4\uace0 \ud310\ub2e8\ud560 \uc218 \uc788\ub294 \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc774\ub77c\uace0 \uc0dd\uac01\ud588\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\ub530\ub77c\uc11c \uc774 \uc804\ub7b5\uc744 \ub354\uc6b1 \ub354 \uace0\ub3c4\ud654 \ud574 \uc801\uc6a9\ud558\uae30\ub85c \ud588\ub2e4."}),"\n",(0,l.jsx)(e.h2,{id:"\ub290\ub080\uc810",children:"\ub290\ub080\uc810"}),"\n",(0,l.jsx)(e.p,{children:"\ubaa8\ub4e0 \uc804\ub7b5\uc744 \uc0b4\ud3b4\ubcfc \ub54c, \uac04\ub2e8\ud55c \uc0d8\ud50c \ucf54\ub4dc\ub97c \uc791\uc131\ud588\ub2e4. \uc815\ucc45\uc744 \uc815\uc758\ud558\uace0, \uadf8\uac83\uc744 \ud310\ub2e8\ud558\ub294 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\ubcf4\uace0, \uc2e4\uc81c\ub85c \ud638\ucd9c\ub3c4 \ud574\ubcf4\uc558\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uadf8\ub807\uac8c \ud574\ubcf4\uba70 \ub0b4\uac00 \uae00\ub85c \uc801\uc740 \uc124\uacc4\uc640 \ucf54\ub4dc\uac04\uc758 \ucc28\uc774\uac00 \ubb34\uc5c7\uc778\uc9c0 \ud30c\uc545\ud560 \uc218 \uc788\uc5c8\uace0 \uc2e4\ud604 \uac00\ub2a5\uc131\uc744 \ud310\ub2e8\ud558\ub294 \ub370\uc5d0\ub3c4 \ub3c4\uc6c0\uc774 \ub418\uc5c8\ub2e4. \uc2e4\uc81c \uad6c\ud604\ud588\uc744\ub54c \ucf54\ub4dc\uac00 \uc608\uc058\uac8c \uc9dc\uc9c0\ub294\uc9c0 \uc54c \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc2dc\uac04\uc740 \uc880 \ub354 \uac78\ub838\uc744 \uc9c0\ub77c\ub3c4, \uc2e4\uc81c\ub85c \uc801\uc6a9\ud574\uc57c \ud558\ub294 \uc0ac\uc548\uc774\uae30 \ub54c\ubb38\uc5d0 \uc2e0\uc911\ud788 \uacb0\uc815\ud558\ub824\uba74 \ud544\uc694\ud55c \uacfc\uc815\uc774\uc600\ub2e4\uace0 \uc0dd\uac01\ud55c\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc774 \uc124\uacc4\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uae30\uc220\uc801\uc778 \ubd80\ubd84 \ub9d0\uace0\ub3c4, \ucee4\ubba4\ub2c8\ucf00\uc774\uc158\uc5d0 \ub300\ud55c \uae68\ub2ec\uc74c\ub3c4 \uc788\uc5c8\ub2e4. \ub098\uc640 PL\ubd84 \ub458\uc774\uc11c \uc124\uacc4-\ub9ac\ubdf0\ub97c \uc9c4\ud589\ud588\ub2e4. \ub9ac\ubdf0\ub97c \uc9c4\ud589\ud558\uace0 \ub2e4\uc2dc \uc124\uacc4\ub97c \ubcf4\uc644\ud574 \uc624\ub294 \uacfc\uc815\uc5d0\uc11c, \ub9ac\ubdf0\uc5d0\uc11c\uc758 PL\ub2d8\uc758 \ub9d0\uc500\uacfc \ub098\uc758 \uc774\ud574\uac00 \ub2e4\ub978 \uacbd\uc6b0\uac00 \uc788\uc5c8\ub2e4. \ub0b4\uac00 \uc774\ud574\ud55c \uc904 \uc54c\uc558\ub294\ub370, \uc544\ub2c8\uc600\ub358 \uac70\ub2e4. \uc774\uac78 \ud655\uc778\ud558\ub294 \uacfc\uc815\uc774 \uc5c6\ub2e4\uba74 \uadf8\uac78 \ubc14\ud0d5\uc73c\ub85c \uc124\uacc4\ud558\uace0, \ub2e4\ub978 \uac83\uc744 \ub2e4\uc74c \ub9ac\ubdf0\ub54c \ud655\uc778\ud558\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uac04\uc744 \ub0ad\ube44\ud558\uac8c \ub418\uc5c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\ud55c\ubc88 \uadf8\ub7f0 \ub4a4\ub85c\ub294 \ub9ac\ubdf0 \ubc1b\uc740 \ud6c4 \ub0b4\uac00 \uc774\ud574\ud55c \uac83\uc774 \ub9de\ub294\uc9c0 \uc815\ub9ac\ud574\uc11c \ud55c\ubc88 \ud655\uc778\uc744 \uc694\uccad\ub4dc\ub838\ub2e4. \uc774\ub807\uac8c \ud558\ub2c8\uae4c \ub098\ub3c4 \ub354 \uc548\uc2ec\uc774 \ub418\uc5c8\uace0 \uc4f8\ub370\uc5c6\ub294 \uc2dc\uac04 \ub0ad\ube44\ub97c \uc904\uc77c \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\uc774 \uc124\uacc4\ub97c \uacbd\ud5d8\ud558\uba74\uc11c \uc2dc\uc2a4\ud15c\uc5d0 \ub300\ud55c \uc774\ud574\ub3c4\ub3c4 \ub354 \ub192\uc544\uc84c\ub2e4. \uadf8\ub3d9\uc548\uc740 \ubb49\ub6b1\uadf8\ub824 \uc54c\uace0\uc788\uc5c8\ub358 \uac83\ub4e4\uc744 \ud655\uc2e4\ud788 \ubb38\uc11c\ub85c \uc801\uc5b4\ubcf4\uba74\uc11c, \uc815\ud655\ud558\uac8c \ud30c\uc545\ud560 \uc218 \uc788\uc5c8\ub2e4. \uadf8\ub9ac\uace0 \ud558\ub4dc\ucf54\ub529\ub41c \uc18c\uc2a4\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uba70 \ubc84\uadf8\ub3c4 \ubc1c\uacac\ud560 \uc218 \uc788\uc5c8\ub2e4."}),"\n",(0,l.jsx)(e.p,{children:"\ud300\uc5d0 \uc6f9\uac1c\ubc1c\uc790\uac00 \uc5c6\uc5b4(\uc9c0\uae08\uc740 \ub098\ubfd0,,) \uc5b4\ub824\uc6b8 \ub54c\ub3c4 \uc788\uc9c0\ub9cc, 1\ub144\ucc28\ub3c4 \uc548\ub418\uc5c8\ub294\ub370 \uc774\ub7f0 \uc124\uacc4\ub3c4 \uacbd\ud5d8\ud560 \uc218 \uc788\ub294 \uac83\uc740 \uc7a5\uc810\uc774\uace0, \ub610 \ub0b4 \uc758\uacac\uc744 \ud45c\ucd9c\ud574\ubcfc \uc218 \uc788\ub294 \uac83\ub3c4 \uc7a5\uc810\uc774\ub2e4. (\uc2dc\uac04\uc0c1 \ubabb\ud558\ub294\uac8c \ub354 \ub9ce\uc9c0\ub9cc ..) \uc544\ubb34\ud2bc \uc88b\uc740 \uacbd\ud5d8\uc774\uc600\ub2e4. \uad8c\ud55c\uc774\ub77c \ud568\uc740 \ubb34\uc870\uac74 ROLE_ \uc774\ub807\uac8c \uc124\uc815\ud558\ub294 \uc904 \uc54c\uc558\ub294\ub370 \uc0c8\ub85c\uc6b4 \uc811\uadfc \ubc29\uc2dd\uc744 \ub9ce\uc774 \uc54c\uac8c \ub418\uc5c8\ub2e4. \uc5bb\uc5b4\uac00\ub294 \uac8c \uaf64 \ub9ce\uc558\ub358 \uacbd\ud5d8\uc774\ub2e4."}),"\n",(0,l.jsx)(e.h1,{id:"\ub808\ud37c\ub7f0\uc2a4",children:"\ub808\ud37c\ub7f0\uc2a4"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.samsungsds.com/kr/insights/cloud_platform_manage.html",children:"https://www.samsungsds.com/kr/insights/cloud_platform_manage.html"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.okta.com/kr/identity-101/role-based-access-control-vs-attribute-based-access-control/",children:"https://www.okta.com/kr/identity-101/role-based-access-control-vs-attribute-based-access-control/"})}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.M)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},4552:(n,e,s)=>{s.d(e,{I:()=>d,M:()=>c});var l=s(1504);const i={},r=l.createContext(i);function c(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);