### 手写Promise

```
class Promise {
	constructor(executor) {
		this.PromiseState = 'pending';
		this.PromiseResult = null;
		this.callBacks = [];
		const self = this;
		// resolve函数
		function resolve(data) {
			if (self.PromiseState !== 'pending') return;
			self.PromiseState = 'fulfilled';
			self.PromiseResult = data;
			setTimeout(() => {
				self.callBacks.forEach(item => {
					item.onResolve()
				});
			})
		}

		// reject 函数
		function reject(data) {
			if (self.PromiseState !== 'pending') return;
			self.PromiseState = 'rejected';
			self.PromiseResult = data;
			setTimeout(() => {
				self.callBacks.forEach(item => {
					item.onReject()
				});
			})
		}

		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e)
		}
	}
	// 添加 then 方法
	then(onResolve, onReject) {
		const self = this;
		// 判断没有传then第二个参数
		if (typeof onReject !== 'function') {
			onReject = (reason) => {
				throw reason
			}
		}
		// 判断没有传then第一个参数
		if (typeof onResolve !== 'function') {
			onResolve = value => value;
		}
		return new Promise((resolve, reject) => {
			function callback(type) {
				try {
					const result = type(self.PromiseResult);
					if (result instanceof Promise) {
						result.then(v => {
							resolve(v)
						}, r => {
							reject(r)
						})
					} else {
						resolve(result);
					}
				} catch (e) {
					reject(e)
				}
			}
			if (this.PromiseState === 'fulfilled') {
				setTimeout(() => {
					callback(onResolve)
				})
			}
			if (this.PromiseState === 'rejected') {
				setTimeout(() => {
					callback(onReject)
				})
			}
			if (this.PromiseState === 'pending') {
				this.callBacks.push({
					onResolve: function () {
						callback(onResolve)
					},
					onReject: function () {
						callback(onReject)
					}
				});
			}
		})
	}
	// 添加 catch 方法
	catch(onReject) {
		return this.then(undefined, onReject);
	}
	// 添加 resolve 方法
	static resolve(data) {
		return new Promise((resolve, reject) => {
			if (data instanceof Promise) {
				data.then(v => {
					resolve(v)
				}, r => {
					reject(r)
				})
			} else {
				resolve(data);
			}
		})
	}
	// 添加 reject 方法
	static reject(reason) {
		return new Promise((resolve, reject) => {
			reject(reason)
		})
	}
	// 添加 all 方法
	static all(promises) {
		return new Promise((resolve, reject) => {
			let count = 0;
			let arr = [];
			for (let i = 0; i < promises.length; i++) {
				promises[i].then(v => {
					count++;
					arr[i] = v;
					if (count === promises.length) {
						resolve(arr);
					}
				}, r => {
					reject(r);
				})
			}
		})
	}
	// 添加 race 方法
	static race(promises) {
		return new Promise((resolve, reject) => {
			for (let i = 0; i < promises.length; i++) {
				promises[i].then(v => {
					resolve(v);
				}, r => {
					reject(r);
				})
			}
		})
	}
}

```