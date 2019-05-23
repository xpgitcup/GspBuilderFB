${域类}
${控制器}
${标题}

var title${域类}= "${标题}"
var echarts${域类}Div;

\$(function () {
    console.info(document.title + "加载了...")
    echarts${域类}Div = echarts.init(document.getElementById('echarts${域类}Div'));
    // 指定图表的配置项和数据
    var treeData = loadTreeViewData${域类}();
    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        legend: {
            top: '2%',
            left: '3%',
            orient: 'vertical',
            data: [{name: '${标题}', icon: 'rectangle'}],
            borderColor: '#c23531'
        },
        series: [
            {
                type: 'tree',
                name: '${标题}',
                data: [treeData],
                top: '5%',
                left: '7%',
                bottom: '2%',
                right: '60%',
                symbolSize: 17,
                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    }
                },
                // 叶子设置
                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    }
    // 使用刚指定的配置项和数据显示图表。
    echarts${域类}Div.setOption(option);
    // 事件处理
    echarts${域类}Div.on('click', function (params) {
            //console.info(params.name); 节点的名称
            var node = params.value // 附加的属性，很有用的
            //请根据需要替换
            treeNodeSelected${域类}(node);
        }
    )
})

function loadTreeViewData${域类}()
{
    var url = "${控制器}/getTreeViewData"
    var json = ajaxCall(url)
    return json
}
