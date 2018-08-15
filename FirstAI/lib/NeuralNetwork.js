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

  this.model = tf.sequential();

  this.initializeLayers = function() {
    this.model.add(tf.layers.dense({
      inputShape: [this.inputNodes],
      activation: "sigmoid",
      units: 5,
      kernelInitializer: 'randomNormal',
      biasInitializer: 'randomNormal',
    }))
    this.model.add(tf.layers.dense({
      inputShape: [4],
      activation: "sigmoid",
      units: this.outputNodes,
      kernelInitializer: 'randomNormal',
      biasInitializer: 'randomNormal'
    }))

    //print( model.getWeights()[0].dataSync() );

    //const savedModel = await model.save('downloads://my-model');
    //print(model.getWeights()[0].data().toString());
    //print(model);
  }

  this.forward = function(inputs) {
    const inputData = tf.tensor2d(inputs, [1,this.inputNodes]);
    //model.predict(inputData).print();
    const output = this.model.predict(inputData).dataSync();

    //Add normalization to the output.
    var jumpPrediction = output[0]/(output[0] + output[1]);
    var noJumpPrediction = output[1]/(output[0] + output[1]);
    const normOut = [jumpPrediction, noJumpPrediction];

    //testing the outputs
    //print(normOut);

    return normOut;
  }

  //Copy the neural net

  //mutate the model a liitle bit
  this.mutateModel = function() {

    var weights = [this.model.getWeights()[0].dataSync(), this.model.getWeights()[1].dataSync(), this.model.getWeights()[2].dataSync(), this.model.getWeights()[3].dataSync()];
    var new_weights = [];

    for(var j=0; j < weights.length; j++) {
      for(var i=0;i < weights[0].length; i++) {
        weights[j][i] = randomGaussian(weights[j][i], 0.05);
      }
    }

    new_weights.push(tf.tensor(weights[0]).reshape([5,5]));
    new_weights.push(tf.tensor(weights[1]).reshape([5]));
    new_weights.push(tf.tensor(weights[2]).reshape([5,2]));
    new_weights.push(tf.tensor(weights[3]).reshape([2]));

    this.model.setWeights(new_weights);

  }

}
