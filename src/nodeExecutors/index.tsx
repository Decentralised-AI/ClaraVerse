// Import all executors so they self-register
import './TextInputExecutor';
import './ImageInputExecutor';
import './LlmPromptExecutor';
import './TextOutputExecutor';
import './TextCombinerExecutor';
import './ConditionalExecutor';
import './ApiCallExecutor';
import './MarkdownOutputExecutor';
import './ImageTextLlmExecutor';
import './TextstoreExecutor'; // Add the TextstoreExecutor

// Export the registry API - only need this once
export * from './NodeExecutorRegistry';
