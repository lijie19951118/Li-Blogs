### Promise

```
promise 的状态
实例对象中的一个属性 【PromiseState】
pending    未决定的
resolved / fulfilled    成功
rejected    失败
promise 对象的值
实例对象中另一个属性 【PromiseResult】
保存着异步任务【成功/失败】的结果
resolve，reject方法去修改
Promise.resolve()
参数非promise对象，返回一个成功的promise对象，返回值为传入的值
参数为promise对象，返回状态为传入的promise的状态，返回的值为传入的promise的值
Promise.reject()
返回状态永远是失败的
返回的值是传入的值
Promise.all()
传入由promise组成的数组
如果全部成功，状态返回成功，值返回所有promise犯规的值组成的数组
如果有失败，状态返回失败，值返回第一个失败的值
Promise.race()
传入由多个promise组成的数组，赛跑
返回状态和值为第一个改成状态的promise的状态和值
改变promise状态的3中方法
resolve、reject、throw  抛出错误
Promise实例的then方法返回一个新的promise
1，throw：返回状态为失败，返回值为失败的值
2，return 非promise对象，返回状态为成功，返回值为return 的值
3，return promise对象，返回状态/值取决于promise结果的状态/值
async方法
async函数的返回值是一个promise实例对象，promise状态和值取决于函数的返回值
1，非promise对象，状态：fulfilled，返回值：函数返回值
2，promise对象，状态：promise的状态，返回值：promise的返回值
3，throw抛出错误，状态：rejected，返回值：错误数据

```