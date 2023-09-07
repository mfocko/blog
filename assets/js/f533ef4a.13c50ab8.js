"use strict";(self.webpackChunkfi=self.webpackChunkfi||[]).push([[2160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"seminar-05-06",title:"5th and 6th seminar",description:"200IQ encryption.\n"},o=void 0,l={unversionedId:"bonuses/seminar-05-06",id:"bonuses/seminar-05-06",title:"5th and 6th seminar",description:"200IQ encryption.\n",source:"@site/pb071/bonuses/05-06.md",sourceDirName:"bonuses",slug:"/bonuses/seminar-05-06",permalink:"/pb071/bonuses/seminar-05-06",draft:!1,editUrl:"https://gitlab.com/mfocko/blog/tree/main/pb071/bonuses/05-06.md",tags:[],version:"current",lastUpdatedAt:1694108971,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"seminar-05-06",title:"5th and 6th seminar",description:"200IQ encryption.\n"},sidebar:"autogeneratedBar",previous:{title:"4th seminar",permalink:"/pb071/bonuses/seminar-04"},next:{title:"8th seminar",permalink:"/pb071/bonuses/seminar-08"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Task no. 1: Reverse (0.5 K\u20a1)",id:"task-no-1-reverse-05-k",level:3},{value:"Task no. 2: Vigen\xe8re (0.5 K\u20a1)",id:"task-no-2-vigen\xe8re-05-k",level:3},{value:"Bonus part (0.5 K\u20a1)",id:"bonus-part-05-k",level:4},{value:"Task no. 3: Bit madness (0.5 K\u20a1)",id:"task-no-3-bit-madness-05-k",level:3},{value:"Task no. 4: All combined to BMP (0.5 K\u20a1)",id:"task-no-4-all-combined-to-bmp-05-k",level:3},{value:"Submitting",id:"submitting",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For this bonus you can get at maximum 2.5 K\u20a1."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"pathname:///files/pb071/bonuses/05-06.tar.gz"},"Source")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this bonus you will implement few functions that will be used together for\nimplementing a very special cipher."),(0,a.kt)("h3",{id:"task-no-1-reverse-05-k"},"Task no. 1: Reverse (0.5 K\u20a1)"),(0,a.kt)("p",null,"Write a function ",(0,a.kt)("inlineCode",{parentName:"p"},"char* reverse(const char* text)")," that returns copy of the input\nstring in reversed order (also uppercase)."),(0,a.kt)("p",null,"In case you are given ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),", return ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,a.kt)("p",null,"Example (more in tests):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char* reversed = reverse("Hello world!");\n\nprintf("%s\\n", reversed);\n// "!DLROW OLLEH"\n\nif (reversed != NULL) {\n    free(reversed);\n}\n')),(0,a.kt)("h3",{id:"task-no-2-vigen\xe8re-05-k"},"Task no. 2: Vigen\xe8re (0.5 K\u20a1)"),(0,a.kt)("p",null,"Vigen\xe8re cipher is similar to the Caesar cipher, but you also have a key that is\nused for encrypting (or decrypting)."),(0,a.kt)("p",null,"Your task is to write two functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char* vigenere_encrypt(const char* key, const char* text)")," for encrypting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char* vigenere_decrypt(const char* key, const char* text)")," for decrypting")),(0,a.kt)("p",null,"In both of those you should return uppercase characters."),(0,a.kt)("p",null,"Meaning of the parameters you are given:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," - String that represents key that is used for ","*","crypting. It consists of\none word and can have only characters of the alphabet. Does not matter if they\nare uppercase or lowercase."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," - String that is to be ","*","crypted.")),(0,a.kt)("p",null,"Function returns address of the encrypted (or decrypted) string. Or ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," in case\nerror occurs."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'char *encrypted = vigenere_encrypt("CoMPuTeR", "Hello world!");\n\nprintf("%s\\n", encrypted);\n// "JSXAI PSINR!"\n\nif (encrypted != NULL) {\n    free(encrypted)\n}\n')),(0,a.kt)("h4",{id:"bonus-part-05-k"},"Bonus part (0.5 K\u20a1)"),(0,a.kt)("p",null,"If you can utilize helper function that would do both encrypting and decrypting,\nyou can gain 0.5 K\u20a1."),(0,a.kt)("p",null,"Usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to decide path in code is prohibited. It leads to merging\nof both functions into one. Point of this part is to discover a way to do this\ngenerically in such way that there are no separate paths for one or the other. One\nfunction with no branching for both of them, parametrization is your friend :)"),(0,a.kt)("h3",{id:"task-no-3-bit-madness-05-k"},"Task no. 3: Bit madness (0.5 K\u20a1)"),(0,a.kt)("p",null,"This is a state of the art crypto. Please do not share :)"),(0,a.kt)("p",null,"For encrypting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Split the character that is to be encrypted in halves (4 and 4 bits each)."),(0,a.kt)("li",{parentName:"ol"},"Bits in 1st half are to be split into pairs. Swap bits in those pairs."),(0,a.kt)("li",{parentName:"ol"},"Then use the 4 bits that you created in the 2nd step for ",(0,a.kt)("inlineCode",{parentName:"li"},"XOR")," with the other\n4 bits.")),(0,a.kt)("p",null,"This simple and ingenious principle will be illustrated on the following example.\nString we want to encrypt is ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello world!"),". We need to encrypt each letter separately,\nso we will demonstrate on letter ",(0,a.kt)("inlineCode",{parentName:"p"},"H"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Letter ",(0,a.kt)("inlineCode",{parentName:"p"},"H")," is represented in ASCII as ",(0,a.kt)("inlineCode",{parentName:"p"},"72"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"72")," represented in binary is: ",(0,a.kt)("inlineCode",{parentName:"p"},"01001000"),". So first 4 bits are: ",(0,a.kt)("inlineCode",{parentName:"p"},"0100")," and last\n4 bits are ",(0,a.kt)("inlineCode",{parentName:"p"},"1000"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First half of bits (",(0,a.kt)("inlineCode",{parentName:"p"},"0100"),") consists of 2 pairs (",(0,a.kt)("inlineCode",{parentName:"p"},"01")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"00"),") which we swap\n(",(0,a.kt)("inlineCode",{parentName:"p"},"01 ~> 10")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"00 ~> 00"),"). That way we get ",(0,a.kt)("inlineCode",{parentName:"p"},"1000"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"That half is used for xor with the other 4 bits:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"    1000  // second half\nXOR 1000  // first half after 2nd step\n--------\n    0000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now we combine both halves (first one is ",(0,a.kt)("inlineCode",{parentName:"p"},"1000"),", which we got from the 2nd step\nand second one is ",(0,a.kt)("inlineCode",{parentName:"p"},"0000"),", which we got from the 3rd step) and get ",(0,a.kt)("inlineCode",{parentName:"p"},"10000000"),",\nwhich is encrypted character ",(0,a.kt)("inlineCode",{parentName:"p"},"H")," using this method."))),(0,a.kt)("p",null,"In case of decryption, reverse those steps."),(0,a.kt)("p",null,"Your task is to implement functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsigned char* bit_encrypt(const char* text)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char* bit_decrypt(const unsigned char* text)"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'unsigned char* encrypted = bit_encrypt("Hello world!");\n\nfor (int i = 0; i < 12;i++) {\n    printf("%x ", encrypted[i]);\n    //80 9c 95 95 96 11 bc 96 b9 95 9d 10\n}\n\nif (encrypted != NULL) {\n    free(encrypted);\n}\n')),(0,a.kt)("h3",{id:"task-no-4-all-combined-to-bmp-05-k"},"Task no. 4: All combined to BMP (0.5 K\u20a1)"),(0,a.kt)("p",null,"Authors of the BMP cipher are non-disclosed :)"),(0,a.kt)("p",null,"Create pair of functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unsigned char* bmp_encrypt(const char* key, const char* text)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"char* bmp_decrypt(const char* key, const unsigned char* text)"))),(0,a.kt)("p",null,"BMP cipher consists of following steps for encrypting:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reverse the input string"),(0,a.kt)("li",{parentName:"ol"},"Use Vigenere on the string you got from step #1"),(0,a.kt)("li",{parentName:"ol"},"Use bit madness on the string you got from step #2")),(0,a.kt)("p",null,"For decrypting, reverse the steps."),(0,a.kt)("h2",{id:"submitting"},"Submitting"),(0,a.kt)("p",null,"In case you have any questions, feel free to reach out to me."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Ideally submit the assignment through the merge request. Step-by-step tutorial is\npresent ",(0,a.kt)("a",{parentName:"p",href:"../mr"},"here"),". For setting assignee my xlogin is ",(0,a.kt)("inlineCode",{parentName:"p"},"xfocko"),"."),(0,a.kt)("p",null,"In case you do not want to experiment on GitLab, send me the source code via email,\nbut please prefix subject with: ",(0,a.kt)("inlineCode",{parentName:"p"},"[PB071/14][seminar-05-06]")),(0,a.kt)("p",null,"Deadline for the submission of the bonus is ",(0,a.kt)("strong",{parentName:"p"},"April 21th 24:00"),"."))}d.isMDXComponent=!0}}]);