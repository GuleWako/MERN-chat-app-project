import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participanties: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participanties: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // Socket io will be implemented here

    // this execute one by one
    // await newMessage.save() 1s
    // await conversation.save() 1s

    // this execute in parallel means at the same time 1s
    await Promise.all([newMessage.save(), conversation.save()]);
    res.status(200).json({
      message: `Message send to  ${receiverId} successfully`,
    });
  } catch (error) {}
};
const getMessages = async (req, res) => {
 try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    console.log(senderId)
    const conversation = await Conversation.findOne({
      participanties: { $all: [senderId, receiverId] },
    }).populate("messages");
    if (!conversation) {
      return res.status(200).json([])
  }
  const messages = conversation.messages;
  res.status(200).json(messages);
    // const messages = [];
    // for(message of conversation.messages){
    //     messages.push(Message.findOne(message))+++
    // }
    // res.status(200).json({
  
    // })
 } catch (error) {
    res.status(500).json({message: error.message})
 }
};
export { sendMessage, getMessages };
