(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{172:function(t,s,o){"use strict";o.r(s);var e=o(0),a=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"content"},[o("h1",{attrs:{id:"servos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#servos","aria-hidden":"true"}},[t._v("#")]),t._v(" Servos")]),t._v(" "),o("p",[t._v("Servos are a type of motor with internal feedback they can move to a set position. The type of servo you will come across most frequently have a set range of motion, but with precise position control you can do a whole manner of actions within the mechanics of your robot! Servo motors (or anything else you connect to the servo ports of your BrainBox) are controlled by accessing "),o("code",[t._v("R.servos[]")]),t._v(", similar to how motors are accessed.")]),t._v(" "),o("div",{staticClass:"language-python extra-class"},[o("pre",{pre:!0,attrs:{class:"language-python"}},[o("code",[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" robot\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\nR "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Robot"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nR"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servos"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mode "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" robot"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PWM_SERVO\n\nR"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("servos"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n")])])]),o("p",[t._v("However, where the value of a motor determines the "),o("em",[t._v("speed")]),t._v(" it turns, the value of a servo controls the "),o("em",[t._v("position")]),t._v(" it is at on its rotation, with a range of -100 to 100. Try it out on your robot to see which values correspond to each position!")]),t._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("When your robot is turned off, the brain will automatically set all of its servos to the 0 position. Make sure you factor this in when you run your robots!")])])])}],!1,null,null,null);s.default=a.exports}}]);