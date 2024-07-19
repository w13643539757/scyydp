 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

// echarts_3()
//echarts_4()
//echarts_5()
//bt01()
//bt02()
//bt03()
/* bt04() */

function echarts_4() {
 var myChart = echarts.init(document.getElementById('echart4'));
option1= {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        
    },
    legend: {
        data: ['锯切', '冲孔','焊接','整形','喷涂'],
		top:'0%',
        textStyle: {
            color: "#fff",
		    fontSize: '14',

        },
 
        //itemGap: 35
    },
    grid: {
        left: '0%',
		top:'20px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 2,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
              //  splitNumber: 2,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [
		{
        type: 'value',
        interval:50,
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 2,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		
		{
        name: '锯切',
        type: 'line',
		 smooth: true,
        data: [148.00, 106.33, 86.00, 128.75, 129.33, 141.50,162.00],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
			
        }
    },
		{
        name: '冲孔',
        type: 'line',
 smooth: true,
        data: [73.50, 80.75, 63.50, 86.00, 56.86, 92.00,99.50],

        itemStyle: {
            normal: {
                color:'#ffc000',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    },
    {
        name: '焊接',
        type: 'line',
 smooth: true,
        data: [37.32, 24.50, 37.98, 38.66, 36.26, 40.24,43.01],

        itemStyle: {
            normal: {
                color:'#4051D8',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    },
{
        name: '整形',
        type: 'line',
 smooth: true,
        data: [186.67, 280.80, 231.56, 260.18, 182.84, 223.90,284.84],

        itemStyle: {
            normal: {
                color:'#D21346',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    },
{
        name: '喷涂',
        type: 'line',
 smooth: true,
        data: [240.41, 190.45, 191.82, 184.93, 194.30, 169.36,143.98],

        itemStyle: {
            normal: {
                color:'#C731C7',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }
    	]
};


        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
	$(".sebtn a").click(function(){
$(this).addClass("active").siblings().removeClass("active")
})
$(".sebtn a").eq(0).click(function(){
	 myChart.setOption(option1);
})
$(".sebtn a").eq(1).click(function(){
	 myChart.setOption(option2);
})
$(".sebtn a").eq(2).click(function(){
	 myChart.setOption(option3);
})
	
    }
    function echarts_5() {
        var myChart = echarts.init(document.getElementById('echart5'));
       option1= {
         //  backgroundColor: '#00265f',
           tooltip: {
               trigger: 'axis',
               axisPointer: {
                   type: 'shadow'
               },
               
           },
           legend: {
               data: ['总单据', '锯冲','焊接','喷涂','预装'],
               top:'0%',
               textStyle: {
                   color: "#fff",
                   fontSize: '14',
       
               },
        
               //itemGap: 35
           },
           grid: {
               left: '0%',
               top:'20px',
               right: '0%',
               bottom: '0',
              containLabel: true
           },
           xAxis: [{
               type: 'category',
                     data: ['广州横沥7#', '广州横沥6#', '长沙花园12-1#','长沙花园12-2#', '合肥包河9#'],
               axisLine: {
                   show: true,
                lineStyle: {
                       color: "rgba(255,255,255,.1)",
                       width: 2,
                       type: "solid"
                   },
               },
               axisTick: {
                   show: false,
               },
               axisLabel:  {
                       interval: 0,
                      // rotate:50,
                       show: true,
                     //  splitNumber: 2,
                       textStyle: {
                            color: "rgba(255,255,255,.6)",
                           fontSize: '12',
                       },
                   },
           }],
           yAxis: [
               {
               type: 'value',
               interval:20,   //Y轴分度
               axisLabel: {
                  //formatter: '{value} %'
                   show:true,
                    textStyle: {
                            color: "rgba(255,255,255,.6)",
                           fontSize: '12',
                       },
               },
               axisTick: {
                   show: false,
               },
               axisLine: {
                   show: true,
                   lineStyle: {
                       color: "rgba(255,255,255,.1	)",
                       width: 2,
                       type: "solid"
                   },
               },
               splitLine: {
                   lineStyle: {
                      color: "rgba(255,255,255,.1)",
                   }
               }
           }],
           series: [
               
               {
               name: '总单据',
               type: 'bar',
                smooth: true,
               data: [126.00, 126.00, 56.00, 56.00, 100.00],
            //    barWidth:'15',
              // barGap: 1,
               itemStyle: {
                   normal: {
                       color:'#62c98d',
                       opacity: 1,
                       barBorderRadius: 5,
                   }
                   
               }
           },
               {
               name: '锯冲',
               type: 'bar',
        smooth: true,
               data: [126.00, 85.00, 56.00, 56.00, 2.00],
       
               itemStyle: {
                   normal: {
                       color:'#ffc000',
                       opacity: 1,
                       
                       barBorderRadius: 5,
                   }
               }
           },
           {
               name: '焊接',
               type: 'bar',
        smooth: true,
               data: [126.00, 80.00, 45.00, 30.00, 0.00],
       
               itemStyle: {
                   normal: {
                       color:'#4051D8',
                       opacity: 1,
                       
                       barBorderRadius: 5,
                   }
               }
           },
       {
               name: '喷涂',
               type: 'bar',
        smooth: true,
               data: [126.00, 71.00, 43.00, 27.00, 0.00],
       
               itemStyle: {
                   normal: {
                       color:'#D21346',
                       opacity: 1,
                       
                       barBorderRadius: 5,
                   }
               }
           },
       {
               name: '预装',
               type: 'bar',
        smooth: true,
               data: [126.00, 60.00, 0.00, 0.00, 0.00],
       
               itemStyle: {
                   normal: {
                       color:'#C731C7',
                       opacity: 1,
                       
                       barBorderRadius: 5,
                   }
               }
           }
               ]
       };
       
       
               myChart.setOption(option1);
               window.addEventListener("resize",function(){
                   myChart.resize();
               });
           $(".sebtn a").click(function(){
       $(this).addClass("active").siblings().removeClass("active")
       })
       $(".sebtn a").eq(0).click(function(){
            myChart.setOption(option1);
       })
       $(".sebtn a").eq(1).click(function(){
            myChart.setOption(option2);
       })
       $(".sebtn a").eq(2).click(function(){
            myChart.setOption(option3);
       })
           
           }
// function echarts_3() {
//  var myChart = echarts.init(document.getElementById('echart3'));
// var spNum = 5,_max=100;
// //var legendData = ['已完成', '未完成', '未完成', '未完成'];
// var y_data = ['其他', '脚手架（万元）', '箱式房（套）', '铝模板（㎡）', '人员情况'];

//   var data1 = [100,15,100,13,74];
//   var data2 = [30,50,40,33,2];
  
// var fomatter_fn = function(v) {
//     return (v.value / _max * 100).toFixed(0) 
// }
// var _label = {
//     normal: {
//         show: true,
//         position: 'inside',
//         formatter: fomatter_fn,
//         textStyle: {
//             color: '#fff',
//             fontSize: 12
//         }
//     }
// };
// option = {

//     grid: {
//         containLabel: true,
//         top: 10,
//         left: 0,
//         right: 15,
//         bottom:-10
//     },
//     tooltip: {
//         show: true,
//         formatter:'{b}<br/>{a}:{c}'
//     },
//     xAxis: {
//         splitNumber: spNum,
//        // interval: _max / spNum,
//         //max: _max,
//         axisLabel: {
//             show: false,
//             formatter: function(v) {
//                 var _v = (v / _max * 100).toFixed(0);
//                 return _v == 0 ? _v : _v + '%';
//             }
//         },
//         axisLine: {
//             show: false
//         },
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         }

//     },
//     yAxis: [{
//         data: y_data,
//         axisLabel: {
//             fontSize: 12,
//             color: 'rgba(255,255,255,.6)'

//         },
//         axisLine: {
//             show: false
//         },
//         axisTick: {
//             show: false
//         },
//         splitLine: {
//             show: false
//         }
//     }, {
//         show: false,
//         data: y_data,
//         axisLine: {
//             show: false
//         }
//     }],
//     series: [{
//         type: 'bar',
//         name: '已完成',
//         stack: '2',
//         label: _label,
//         legendHoverLink: false, barWidth: '50%',
//         itemStyle: {
//             normal: {
//                 color: '#58c485'
//             },
//             emphasis: {
//                 color: '#58c485'
//             }
//         },
//         data: data1
//     }, {
//         type: 'bar',
//         name: '未完成',
//         stack: '2',
//         legendHoverLink: false, barWidth: '50%',
//         label: _label,
//         itemStyle: {
//             normal: {
//                 color: '#ea7231'
//             },
//             emphasis: {
//                 color: '#ea7231'
//             }
//         },
//         data: data2
//     }]
// };
//         myChart.setOption(option);
//         window.addEventListener("resize",function(){
//             myChart.resize();
//         });
//     }
function bt01() {
 var myChart = echarts.init(document.getElementById('bt01'));
	var data1=1619.43//已完成
var data2=0//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '59%',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '广州横沥7#',
        x: 'center',  y: '15',
        textStyle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '生产情况',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '已完成'
            },
            {
                value: data2,
                name: '未完成'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt02() {
 var myChart = echarts.init(document.getElementById('bt02'));
var data1=1531.85//己完成
var data2=80.62//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '59%',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '广州横沥6#',
         x: 'center',  y: '15',
        textStyle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '生产情况',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '己完成'
            },
            {
                value: data2,
                name: '未完成'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt03() {
 var myChart = echarts.init(document.getElementById('bt03'));
var data1=706.71//己完成
var data2=706.71//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [ {
        text: data3.toFixed(1)+'%',
        x: 'center', y: '59%',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    },
			{
        text: '',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '长沙花园12#',
         x: 'center',  y: '15',
        textStyle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '生产情况',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {show: false,
           
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            {
                value: data1,
                name: '己完成'

            },{
                value: data2,
                name: '未完成'
            },
        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
/* function bt04() {
 var myChart = echarts.init(document.getElementById('bt04'));
var data1=2//己完成
var data2=3//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
         text: data3.toFixed(1)+'%',
        x: 'center', y: '59%',
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 10,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '长沙花园7#',
         x: 'center',
        y: '15',
        textStyle: {
            fontSize: 13,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '发货情况',
        type: 'pie',
        center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '己完成'
            },
            {
                value: data2,
                name: '未完成'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    } */
})



		
		
		


		



















