/* eslint-disable */

module.exports = function(file, api) {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.VariableDeclarator)
    .filter(path => {
      return (
        path.node.expression.type === 'CallExpression' &&
        path.node.expression.callee.type === 'Identifier' &&
        functionsToTransform.indexOf(path.node.expression.callee.name) !== -1
      )
    })
    .forEach(path => {
      var lastArg = path.node.expression.arguments.length - 1
      var fn = path.node.expression.arguments[lastArg]

      path.node.expression.arguments[lastArg] = j.arrowFunctionExpression(
        fn.params,
        fn.body
      )
    })
    .toSource()
}
