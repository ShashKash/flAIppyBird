var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.10.0";
document.getElementsByTagName('head')[0].appendChild(script);

function NeuralNetwok() {
  this.nosLayers = arguments[0];
  this.inputNodes = arguments[1];
  this.outputNodes = arguments[2];
  this.hiddenLayers = 1;


  //For the hidden layers...
  // if(this.nosLayers > 2) {
  //   this.hiddenLayers = arguments[3];
  //   for(var hLayer = 0; hLayer < this.hiddenLayers; hLayer++) {
  //     this.HiddenLayersConfig = {
  //       input: arguments[hLayer+4]
  //       output: arguments[hLayer+5]
  //     }
  //   }
  // }

  const model = tf.sequential();

  this.initializeLayers = function() {
    model.add(tf.layers.dense({
      inputShape: [this.inputNodes],
      activation: "sigmoid",
      units: 6,
      kernelInitializer: 'randomNormal',
      biasInitializer: 'randomNormal',
    }))
    model.add(tf.layers.dense({
      inputShape: [6],
      activation: "sigmoid",
      units: this.outputNodes,
      kernelInitializer: 'randomNormal',
      biasInitializer: 'randomNormal'
    }))
  }

  this.forward = function(inputs) {
    const inputData = tf.tensor2d(inputs, [1,this.inputNodes]);
    model.predict(inputData).print();
    // return output;
  }

  //Copy the neural net
  this.copy = function() {

  }

  //mutate the model a liitle bit
  this.mutateModel = function() {

  }
}
